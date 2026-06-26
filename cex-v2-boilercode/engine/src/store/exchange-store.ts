import { prisma } from "../db.js";

export type Side        = "buy" | "sell";
export type OrderType   = "market" | "limit";
export type OrderStatus = "open" | "partially_filled" | "filled" | "cancelled";

// Balance types
export interface AssetBalance {
  available: number;
  locked:    number;
}

export type UserBalances = Record<string, AssetBalance>;

// Order / fill / trade types
export interface RestingOrder {
  orderId:   string;
  userId:    string;
  side:      Side;
  type:      "limit";
  symbol:    string;
  price:     number;
  qty:       number;   // remaining qty on the book (original slot size)
  filledQty: number;   // filled from this slot since it entered the book
  status:    OrderStatus;
  createdAt: number;
}

export interface Fill {
  fillId:      string;
  symbol:      string;
  price:       number;
  qty:         number;
  buyOrderId:  string;
  sellOrderId: string;
  createdAt:   number;
}

export interface OrderRecord {
  orderId:   string;
  userId:    string;
  side:      Side;
  type:      OrderType;
  symbol:    string;
  price:     number | null;
  qty:       number;
  filledQty: number;
  status:    OrderStatus;
  fills:     Fill[];
  createdAt: number;
}

export interface Trade {
  symbol: string;
  price:  number;
  qty:    number;
  side:   Side;
  time:   number;
}

export interface OrderBook {
  bids: Map<number, RestingOrder[]>;
  asks: Map<number, RestingOrder[]>;
}

export interface CreateOrderInput {
  userId: string;
  type:   OrderType;
  side:   Side;
  symbol: string;
  price:  number | null;
  qty:    number;
}

export interface DepthLevel    { price: number; qty: number; }
export interface DepthResponse { symbol: string; bids: DepthLevel[]; asks: DepthLevel[]; }

// In-memory stores  (hydrated from DB on startup, written-through after mutations)

export const BALANCES       = new Map<string, UserBalances>();
export const ORDERBOOKS     = new Map<string, OrderBook>();
export const ORDERS         = new Map<string, OrderRecord>();
export const FILLS:           Fill[]  = [];
export const RESTING_ORDERS = new Map<string, RestingOrder>();
export const TRADES         = new Map<string, Trade[]>();

// Tracks users whose default balances are already committed to the DB.
// Populated at hydration time; updated on first-write for brand-new users.
// Avoids a redundant DB transaction on every get_user_balance call.
const PERSISTED_USERS = new Set<string>();

// Maximum trades kept in memory per symbol (prevents unbounded growth)
const MAX_TRADES_PER_SYMBOL = 1_000;

// Symbol parsing
const KNOWN_QUOTES = ["USDT", "INR", "ETH", "BTC"] as const;

export function parseSymbol(symbol: string): { base: string; quote: string } {
  for (const quote of KNOWN_QUOTES) {
    if (symbol.endsWith(quote) && symbol.length > quote.length) {
      return { base: symbol.slice(0, -quote.length), quote };
    }
  }
  return { base: symbol, quote: "INR" };
}

// Balance helpers

export function getUserBalance(userId: string): UserBalances {
  if (!BALANCES.has(userId)) {
    BALANCES.set(userId, {
      INR: { available: 100_000, locked: 0 },
      BTC: { available: 10,      locked: 0 },
    });
  }
  return BALANCES.get(userId)!;
}

function assetOf(userId: string, asset: string): AssetBalance {
  const balances = getUserBalance(userId);
  if (!balances[asset]) balances[asset] = { available: 0, locked: 0 };
  return balances[asset];
}

export async function depositBalance(userId: string, asset: string, amount: number) {
  if (amount <= 0) throw new Error("Amount must be positive");
  const ab = assetOf(userId, asset);
  ab.available += amount;

  await prisma.userBalance.upsert({
    where:  { userId_asset: { userId, asset } },
    update: { available: ab.available, locked: ab.locked },
    create: { userId, asset, available: ab.available, locked: ab.locked },
  });

  PERSISTED_USERS.add(userId);
  return { asset, available: ab.available };
}


// Order-book helpers  (sync — called from inside the matching loop)


function getOrderBook(symbol: string): OrderBook {
  if (!ORDERBOOKS.has(symbol)) {
    ORDERBOOKS.set(symbol, { bids: new Map(), asks: new Map() });
  }
  return ORDERBOOKS.get(symbol)!;
}

export function addToBook(order: RestingOrder): void {
  const book = getOrderBook(order.symbol);
  const side = order.side === "buy" ? book.bids : book.asks;
  if (!side.has(order.price)) side.set(order.price, []);
  side.get(order.price)!.push(order);
  RESTING_ORDERS.set(order.orderId, order);
}

export function removeFromBook(order: RestingOrder): void {
  const book = getOrderBook(order.symbol);
  const side = order.side === "buy" ? book.bids : book.asks;
  const list = side.get(order.price);
  if (!list) return;
  const idx = list.findIndex((o) => o.orderId === order.orderId);
  if (idx !== -1) list.splice(idx, 1);
  if (list.length === 0) side.delete(order.price);
  RESTING_ORDERS.delete(order.orderId);
}

function restingRemaining(order: RestingOrder): number {
  return order.qty - order.filledQty;
}

// Fund locking  (sync — called once at order creation)

function lockFunds(input: CreateOrderInput): void {
  const { base, quote } = parseSymbol(input.symbol);

  if (input.side === "buy" && input.type === "limit") {
    const cost = input.price! * input.qty;
    const qb   = assetOf(input.userId, quote);
    if (qb.available < cost) throw new Error(`Insufficient ${quote} balance`);
    qb.available -= cost;
    qb.locked    += cost;
    return;
  }

  if (input.side === "sell") {
    const bb = assetOf(input.userId, base);
    if (bb.available < input.qty) throw new Error(`Insufficient ${base} balance`);
    bb.available -= input.qty;
    bb.locked    += input.qty;
  }
}

// Fill settlement  (sync — called once per fill inside the matching loop)

function settleFill(
  fill:               Fill,
  incomingSide:       Side,
  incomingUserId:     string,
  incomingLimitPrice: number | null,
  restingUserId:      string,
  symbol:             string,
): void {
  const { base, quote } = parseSymbol(symbol);
  const { qty: fillQty, price: execPrice } = fill;
  const tradeValue = fillQty * execPrice;

  const incomingBase  = assetOf(incomingUserId, base);
  const incomingQuote = assetOf(incomingUserId, quote);
  const restingBase   = assetOf(restingUserId,  base);
  const restingQuote  = assetOf(restingUserId,  quote);

  if (incomingSide === "buy") {
    if (incomingLimitPrice !== null) {
      const lockedPortion    = fillQty * incomingLimitPrice;
      const priceImprovement = lockedPortion - tradeValue;
      incomingQuote.locked    -= lockedPortion;
      incomingQuote.available += priceImprovement;
    } else {
      if (incomingQuote.available < tradeValue) {
        throw new Error(`Insufficient ${quote} for market buy fill`);
      }
      incomingQuote.available -= tradeValue;
    }
    incomingBase.available  += fillQty;
    restingBase.locked      -= fillQty;
    restingQuote.available  += tradeValue;
  } else {
    incomingBase.locked     -= fillQty;
    incomingQuote.available += tradeValue;
    restingQuote.locked     -= tradeValue;
    restingBase.available   += fillQty;
  }
}


// Public read helpers


export function getDepth(symbol: string): DepthResponse {
  const book = getOrderBook(symbol);
  const bids = [...book.bids.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([price, orders]) => ({ price, qty: orders.reduce((s, o) => s + restingRemaining(o), 0) }));
  const asks = [...book.asks.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([price, orders]) => ({ price, qty: orders.reduce((s, o) => s + restingRemaining(o), 0) }));
  return { symbol, bids, asks };
}

export function getUserOrders(userId: string): OrderRecord[] {
  return [...ORDERS.values()].filter((o) => o.userId === userId);
}

export function getRecentTrades(symbol: string): Trade[] {
  return TRADES.get(symbol) ?? [];
}


// createOrder — sync matching loop, then atomic DB flush


export async function createOrder(input: CreateOrderInput): Promise<OrderRecord> {
  if (input.qty <= 0) throw new Error("Invalid quantity");
  if (input.type === "limit" && (input.price === null || input.price <= 0)) {
    throw new Error("Invalid price");
  }

  lockFunds(input);

  const order: OrderRecord = {
    orderId:   crypto.randomUUID(),
    userId:    input.userId,
    side:      input.side,
    type:      input.type,
    symbol:    input.symbol,
    price:     input.price,
    qty:       input.qty,
    filledQty: 0,
    status:    "open",
    fills:     [],
    createdAt: Date.now(),
  };

  ORDERS.set(order.orderId, order);

  // Track which users' balances changed during matching
  const affectedUsers = new Set<string>([input.userId]);
  // Track which resting orders were touched (need status/filledQty update in DB)
  const updatedRestingIds = new Set<string>();

  const book      = getOrderBook(input.symbol);
  let   remaining = order.qty;

  // ── BUY: match against asks (lowest ask first) ──
  if (order.side === "buy") {
    const asks = [...book.asks.entries()].sort((a, b) => a[0] - b[0]);

    for (const [askPrice, askOrders] of asks) {
      if (remaining <= 0) break;
      if (order.type === "limit" && order.price !== null && order.price < askPrice) break;

      for (const sellOrder of [...askOrders]) {
        if (remaining <= 0) break;
        const sellRemaining = restingRemaining(sellOrder);
        const fillQty       = Math.min(remaining, sellRemaining);
        if (fillQty <= 0) continue;

        const fill: Fill = {
          fillId:      crypto.randomUUID(),
          symbol:      order.symbol,
          price:       askPrice,
          qty:         fillQty,
          buyOrderId:  order.orderId,
          sellOrderId: sellOrder.orderId,
          createdAt:   Date.now(),
        };

        FILLS.push(fill);
        order.fills.push(fill);
        order.filledQty     += fillQty;
        sellOrder.filledQty += fillQty;
        remaining           -= fillQty;

        settleFill(fill, "buy", order.userId, order.price, sellOrder.userId, order.symbol);
        affectedUsers.add(sellOrder.userId);
        updatedRestingIds.add(sellOrder.orderId);

        const sellRecord = ORDERS.get(sellOrder.orderId);
        if (sellRecord) {
          sellRecord.filledQty += fillQty;
          sellRecord.fills.push(fill);
          if (restingRemaining(sellOrder) === 0) {
            sellRecord.status = "filled";
            sellOrder.status  = "filled";
            removeFromBook(sellOrder);
          } else {
            sellRecord.status = "partially_filled";
            sellOrder.status  = "partially_filled";
          }
          ORDERS.set(sellRecord.orderId, sellRecord);
        }
      }
    }
  }

  // ── SELL: match against bids (highest bid first) ──
  else {
    const bids = [...book.bids.entries()].sort((a, b) => b[0] - a[0]);

    for (const [bidPrice, bidOrders] of bids) {
      if (remaining <= 0) break;
      if (order.type === "limit" && order.price !== null && order.price > bidPrice) break;

      for (const buyOrder of [...bidOrders]) {
        if (remaining <= 0) break;
        const buyRemaining = restingRemaining(buyOrder);
        const fillQty      = Math.min(remaining, buyRemaining);
        if (fillQty <= 0) continue;

        const fill: Fill = {
          fillId:      crypto.randomUUID(),
          symbol:      order.symbol,
          price:       bidPrice,
          qty:         fillQty,
          buyOrderId:  buyOrder.orderId,
          sellOrderId: order.orderId,
          createdAt:   Date.now(),
        };

        FILLS.push(fill);
        order.fills.push(fill);
        order.filledQty    += fillQty;
        buyOrder.filledQty += fillQty;
        remaining          -= fillQty;

        settleFill(fill, "sell", order.userId, order.price, buyOrder.userId, order.symbol);
        affectedUsers.add(buyOrder.userId);
        updatedRestingIds.add(buyOrder.orderId);

        const buyRecord = ORDERS.get(buyOrder.orderId);
        if (buyRecord) {
          buyRecord.filledQty += fillQty;
          buyRecord.fills.push(fill);
          if (restingRemaining(buyOrder) === 0) {
            buyRecord.status = "filled";
            buyOrder.status  = "filled";
            removeFromBook(buyOrder);
          } else {
            buyRecord.status = "partially_filled";
            buyOrder.status  = "partially_filled";
          }
          ORDERS.set(buyRecord.orderId, buyRecord);
        }
      }
    }
  }

  // Final status of the incoming order
  if      (order.filledQty === 0)       order.status = "open";
  else if (order.filledQty < order.qty) order.status = "partially_filled";
  else                                   order.status = "filled";

  // Place unfilled remainder on the book
  if (remaining > 0 && order.type === "limit") {
    const resting: RestingOrder = {
      orderId:   order.orderId,
      userId:    order.userId,
      side:      order.side,
      type:      "limit",
      symbol:    order.symbol,
      price:     order.price!,
      qty:       remaining,
      filledQty: 0,
      status:    order.status,
      createdAt: order.createdAt,
    };
    addToBook(resting);
  }

  ORDERS.set(order.orderId, order);

  // Append new trades to in-memory TRADES map (trimmed to MAX_TRADES_PER_SYMBOL)
  for (const fill of order.fills) {
    if (!TRADES.has(fill.symbol)) TRADES.set(fill.symbol, []);
    const trades = TRADES.get(fill.symbol)!;
    trades.push({ symbol: fill.symbol, price: fill.price, qty: fill.qty, side: order.side, time: fill.createdAt });
    if (trades.length > MAX_TRADES_PER_SYMBOL) trades.splice(0, trades.length - MAX_TRADES_PER_SYMBOL);
  }

  // Persist everything to Postgres in one atomic transaction
  await flushCreateOrder(order, affectedUsers, updatedRestingIds);

  return order;
}

// flushCreateOrder — single atomic DB transaction for all matching side effects

async function flushCreateOrder(
  order:             OrderRecord,
  affectedUsers:     Set<string>,
  updatedRestingIds: Set<string>,
): Promise<void> {
  const ops: any[] = [];

  // 1. Upsert every balance that changed during matching
  for (const userId of affectedUsers) {
    const balances = BALANCES.get(userId);
    if (!balances) continue;
    for (const [asset, bal] of Object.entries(balances)) {
      ops.push(
        prisma.userBalance.upsert({
          where:  { userId_asset: { userId, asset } },
          update: { available: bal.available, locked: bal.locked },
          create: { userId, asset, available: bal.available, locked: bal.locked },
        }),
      );
    }
  }

  // 2. Create the incoming order record
  ops.push(
    prisma.exchangeOrder.create({
      data: {
        orderId:   order.orderId,
        userId:    order.userId,
        side:      order.side,
        type:      order.type,
        symbol:    order.symbol,
        price:     order.price,
        qty:       order.qty,
        filledQty: order.filledQty,
        status:    order.status,
        createdAt: new Date(order.createdAt),
      },
    }),
  );

  // 3. Update every resting order that was touched during matching
  for (const restingId of updatedRestingIds) {
    const o = ORDERS.get(restingId);
    if (!o) continue;
    ops.push(
      prisma.exchangeOrder.update({
        where: { orderId: restingId },
        data:  { filledQty: o.filledQty, status: o.status },
        // updatedAt is automatically set by Prisma @updatedAt
      }),
    );
  }

  // 4. Create fill records and trade records for every fill
  for (const fill of order.fills) {
    const ts = new Date(fill.createdAt);
    ops.push(
      prisma.exchangeFill.create({
        data: {
          fillId:      fill.fillId,
          symbol:      fill.symbol,
          price:       fill.price,
          qty:         fill.qty,
          buyOrderId:  fill.buyOrderId,
          sellOrderId: fill.sellOrderId,
          createdAt:   ts,
        },
      }),
    );
    ops.push(
      prisma.exchangeTrade.create({
        data: {
          symbol:    fill.symbol,
          price:     fill.price,
          qty:       fill.qty,
          side:      order.side,
          createdAt: ts,
        },
      }),
    );
  }

  await prisma.$transaction(ops);
}


// cancelOrder — sync in-memory update, then atomic DB flush


export async function cancelOrder(orderId: string) {
  const order = ORDERS.get(orderId);
  if (!order)                       throw new Error("Order not found");
  if (order.status === "filled")    throw new Error("Cannot cancel filled order");
  if (order.status === "cancelled") throw new Error("Order already cancelled");

  const remainingQty = order.qty - order.filledQty;

  if (remainingQty > 0 && order.type === "limit") {
    const resting = RESTING_ORDERS.get(orderId);
    if (resting) removeFromBook(resting);
  }

  const { base, quote } = parseSymbol(order.symbol);
  const userId           = order.userId;

  if (order.side === "buy") {
    const refund = (order.price ?? 0) * remainingQty;
    const qb     = assetOf(userId, quote);
    qb.locked    -= refund;
    qb.available += refund;
  } else {
    const bb      = assetOf(userId, base);
    bb.locked    -= remainingQty;
    bb.available += remainingQty;
  }

  order.status = "cancelled";
  ORDERS.set(order.orderId, order);

  // Persist status change and refunded balance in one transaction
  const changedAsset = order.side === "buy" ? quote : base;
  const bal          = assetOf(userId, changedAsset);

  await prisma.$transaction([
    prisma.exchangeOrder.update({
      where: { orderId },
      data:  { status: "cancelled" },
      // updatedAt auto-set by @updatedAt
    }),
    prisma.userBalance.upsert({
      where:  { userId_asset: { userId, asset: changedAsset } },
      update: { available: bal.available, locked: bal.locked },
      create: { userId, asset: changedAsset, available: bal.available, locked: bal.locked },
    }),
  ]);

  return { orderId: order.orderId, status: order.status, cancelledQty: remainingQty };
}


// hydrateFromDB — load all persistent state into Maps on engine startup


export async function hydrateFromDB(): Promise<void> {
  console.log("Hydrating engine state from database...");

  // 1. Load balances → BALANCES map
  const dbBalances = await prisma.userBalance.findMany();
  for (const b of dbBalances) {
    if (!BALANCES.has(b.userId)) BALANCES.set(b.userId, {});
    BALANCES.get(b.userId)![b.asset] = { available: b.available, locked: b.locked };
    PERSISTED_USERS.add(b.userId);
  }

  // 2. Load fills → build per-order fill index for step 3
  const dbFills   = await prisma.exchangeFill.findMany({ orderBy: { createdAt: "asc" } });
  const fillsById = new Map<string, Fill[]>();

  for (const f of dbFills) {
    const fill: Fill = {
      fillId:      f.fillId,
      symbol:      f.symbol,
      price:       f.price,
      qty:         f.qty,
      buyOrderId:  f.buyOrderId,
      sellOrderId: f.sellOrderId,
      createdAt:   f.createdAt.getTime(),
    };
    FILLS.push(fill);
    for (const id of [f.buyOrderId, f.sellOrderId]) {
      if (!fillsById.has(id)) fillsById.set(id, []);
      fillsById.get(id)!.push(fill);
    }
  }

  // 3. Load orders → ORDERS map, rebuild live order book
  //    Load oldest-first so time-priority in the book is preserved
  const dbOrders = await prisma.exchangeOrder.findMany({
    orderBy: { createdAt: "asc" },
  });

  for (const o of dbOrders) {
    const record: OrderRecord = {
      orderId:   o.orderId,
      userId:    o.userId,
      side:      o.side      as Side,
      type:      o.type      as OrderType,
      symbol:    o.symbol,
      price:     o.price,
      qty:       o.qty,
      filledQty: o.filledQty,
      status:    o.status    as OrderStatus,
      fills:     fillsById.get(o.orderId) ?? [],
      createdAt: o.createdAt.getTime(),
    };
    ORDERS.set(o.orderId, record);

    // Rebuild the live book from open/partially-filled limit orders.
    // The resting slot represents the *remaining* qty: (original qty - filledQty).
    if ((o.status === "open" || o.status === "partially_filled") && o.type === "limit" && o.price != null) {
      const remainingQty = o.qty - o.filledQty;
      if (remainingQty > 0) {
        const resting: RestingOrder = {
          orderId:   o.orderId,
          userId:    o.userId,
          side:      o.side as Side,
          type:      "limit",
          symbol:    o.symbol,
          price:     o.price,
          qty:       remainingQty, // slot size = remaining (filledQty starts at 0 for this slot)
          filledQty: 0,
          status:    o.status as OrderStatus,
          createdAt: o.createdAt.getTime(),
        };
        addToBook(resting); // addToBook also sets RESTING_ORDERS — no double-set needed
      }
    }
  }

  // 4. Load recent trades per symbol (capped at MAX_TRADES_PER_SYMBOL)
  const dbTrades = await prisma.exchangeTrade.findMany({
    orderBy: { createdAt: "asc" },
    take:    MAX_TRADES_PER_SYMBOL,
  });
  for (const t of dbTrades) {
    if (!TRADES.has(t.symbol)) TRADES.set(t.symbol, []);
    TRADES.get(t.symbol)!.push({
      symbol: t.symbol,
      price:  t.price,
      qty:    t.qty,
      side:   t.side as Side,
      time:   t.createdAt.getTime(),
    });
  }

  console.log(
    `Hydration complete — ${dbBalances.length} balances, ` +
    `${dbOrders.length} orders, ${dbFills.length} fills, ${dbTrades.length} trades`,
  );
}

// ---------------------------------------------------------------------------
// persistUserDefaultsIfNew — called the first time a userId is seen via
// get_user_balance. Uses upsert with no-op update so it never overwrites
// a real balance that was already in the DB.
// ---------------------------------------------------------------------------

export async function persistUserDefaultsIfNew(userId: string): Promise<void> {
  if (PERSISTED_USERS.has(userId)) return;

  const balances = BALANCES.get(userId);
  if (!balances) return;

  const ops = Object.entries(balances).map(([asset, bal]) =>
    prisma.userBalance.upsert({
      where:  { userId_asset: { userId, asset } },
      update: {},  // intentional no-op: never overwrite an existing real balance
      create: { userId, asset, available: bal.available, locked: bal.locked },
    }),
  );
  await prisma.$transaction(ops);
  PERSISTED_USERS.add(userId);
}
