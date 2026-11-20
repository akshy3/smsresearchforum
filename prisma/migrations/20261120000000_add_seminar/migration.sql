-- CreateTable
CREATE TABLE "Seminar" (
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
);

-- CreateIndex
CREATE UNIQUE INDEX "Seminar_sourceId_key" ON "Seminar"("sourceId");

-- CreateIndex
CREATE INDEX "Seminar_status_date_idx" ON "Seminar"("status", "date");
