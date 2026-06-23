-- CreateTable
CREATE TABLE "user_balances" (
    "userId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "available" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "locked" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "user_balances_pkey" PRIMARY KEY ("userId","asset")
);

-- CreateTable
CREATE TABLE "exchange_orders" (
    "orderId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "qty" DOUBLE PRECISION NOT NULL,
    "filledQty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "createdAt" BIGINT NOT NULL,

    CONSTRAINT "exchange_orders_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "exchange_fills" (
    "fillId" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "buyOrderId" TEXT NOT NULL,
    "sellOrderId" TEXT NOT NULL,
    "createdAt" BIGINT NOT NULL,

    CONSTRAINT "exchange_fills_pkey" PRIMARY KEY ("fillId")
);

-- CreateTable
CREATE TABLE "exchange_trades" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "side" TEXT NOT NULL,
    "time" BIGINT NOT NULL,

    CONSTRAINT "exchange_trades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exchange_orders_userId_idx" ON "exchange_orders"("userId");

-- CreateIndex
CREATE INDEX "exchange_orders_symbol_status_idx" ON "exchange_orders"("symbol", "status");

-- CreateIndex
CREATE INDEX "exchange_fills_buyOrderId_idx" ON "exchange_fills"("buyOrderId");

-- CreateIndex
CREATE INDEX "exchange_fills_sellOrderId_idx" ON "exchange_fills"("sellOrderId");

-- CreateIndex
CREATE INDEX "exchange_trades_symbol_time_idx" ON "exchange_trades"("symbol", "time");
