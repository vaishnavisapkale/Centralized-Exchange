-- ============================================================
-- Migration: schema_v2_datetime_fk_updatedAt
--
-- Changes:
--   1. Convert BigInt epoch-ms timestamps → TIMESTAMP WITH TIME ZONE
--   2. Rename exchange_trades.time → createdAt
--   3. Add updatedAt to exchange_orders and user_balances
--   4. Add FK constraints: exchange_fills → exchange_orders
--   5. Add missing indexes (createdAt, symbol+createdAt)
--   6. Drop stale symbol_time index on exchange_trades
-- ============================================================

-- ──────────────────────────────────────────────────────────
-- 1. exchange_orders: BigInt createdAt → DateTime
--    Add updatedAt
-- ──────────────────────────────────────────────────────────

ALTER TABLE "exchange_orders"
  ADD COLUMN "createdAt_new" TIMESTAMPTZ;

UPDATE "exchange_orders"
  SET "createdAt_new" = to_timestamp("createdAt"::double precision / 1000.0);

ALTER TABLE "exchange_orders"
  ALTER COLUMN "createdAt_new" SET NOT NULL;

ALTER TABLE "exchange_orders"
  DROP COLUMN "createdAt";

ALTER TABLE "exchange_orders"
  RENAME COLUMN "createdAt_new" TO "createdAt";

ALTER TABLE "exchange_orders"
  ADD COLUMN "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now();

-- ──────────────────────────────────────────────────────────
-- 2. exchange_fills: BigInt createdAt → DateTime
-- ──────────────────────────────────────────────────────────

ALTER TABLE "exchange_fills"
  ADD COLUMN "createdAt_new" TIMESTAMPTZ;

UPDATE "exchange_fills"
  SET "createdAt_new" = to_timestamp("createdAt"::double precision / 1000.0);

ALTER TABLE "exchange_fills"
  ALTER COLUMN "createdAt_new" SET NOT NULL;

ALTER TABLE "exchange_fills"
  DROP COLUMN "createdAt";

ALTER TABLE "exchange_fills"
  RENAME COLUMN "createdAt_new" TO "createdAt";

-- ──────────────────────────────────────────────────────────
-- 3. exchange_trades: BigInt "time" → DateTime "createdAt"
-- ──────────────────────────────────────────────────────────

ALTER TABLE "exchange_trades"
  ADD COLUMN "createdAt" TIMESTAMPTZ;

UPDATE "exchange_trades"
  SET "createdAt" = to_timestamp("time"::double precision / 1000.0);

ALTER TABLE "exchange_trades"
  ALTER COLUMN "createdAt" SET NOT NULL;

ALTER TABLE "exchange_trades"
  DROP COLUMN "time";

-- ──────────────────────────────────────────────────────────
-- 4. user_balances: add updatedAt
-- ──────────────────────────────────────────────────────────

ALTER TABLE "user_balances"
  ADD COLUMN "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now();

-- ──────────────────────────────────────────────────────────
-- 5. FK constraints: exchange_fills → exchange_orders
-- ──────────────────────────────────────────────────────────

ALTER TABLE "exchange_fills"
  ADD CONSTRAINT "exchange_fills_buyOrderId_fkey"
  FOREIGN KEY ("buyOrderId")
  REFERENCES "exchange_orders"("orderId")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "exchange_fills"
  ADD CONSTRAINT "exchange_fills_sellOrderId_fkey"
  FOREIGN KEY ("sellOrderId")
  REFERENCES "exchange_orders"("orderId")
  ON DELETE RESTRICT ON UPDATE CASCADE;

-- ──────────────────────────────────────────────────────────
-- 6. New indexes
-- ──────────────────────────────────────────────────────────

-- Range queries by time on orders
CREATE INDEX "exchange_orders_createdAt_idx"
  ON "exchange_orders"("createdAt");

-- Time-ordered fills per symbol (e.g. OHLCV reconstruction)
CREATE INDEX "exchange_fills_symbol_createdAt_idx"
  ON "exchange_fills"("symbol", "createdAt");

-- ──────────────────────────────────────────────────────────
-- 7. Fix stale index on exchange_trades (old name referenced old column)
-- ──────────────────────────────────────────────────────────

DROP INDEX IF EXISTS "exchange_trades_symbol_time_idx";

CREATE INDEX "exchange_trades_symbol_createdAt_idx"
  ON "exchange_trades"("symbol", "createdAt");
