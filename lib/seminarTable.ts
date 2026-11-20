import { prisma } from '@/lib/prisma'

// Migrations are not run during the Vercel build (prisma migrate hangs through the
// Supabase connection pooler), so the seminar routes create the Seminar table on
// first use. Keep this in step with prisma/migrations/20261120000000_add_seminar.

const STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS "Seminar" (
    "id" SERIAL NOT NULL,
    "kind" TEXT NOT NULL,
    "scholar" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "guide" TEXT,
    "date" TEXT,
    "time" TEXT,
    "venue" TEXT,
    "meetingLink" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "source" TEXT NOT NULL DEFAULT 'manual',
    "sourceId" TEXT,
    "rawText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Seminar_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "Seminar_sourceId_key" ON "Seminar"("sourceId")`,
  `CREATE INDEX IF NOT EXISTS "Seminar_status_date_idx" ON "Seminar"("status", "date")`,
]

let ready: Promise<void> | null = null

export function ensureSeminarTable() {
  ready ??= (async () => {
    for (const statement of STATEMENTS) await prisma.$executeRawUnsafe(statement)
  })().catch((error) => {
    ready = null // try again on the next request
    throw error
  })
  return ready
}
