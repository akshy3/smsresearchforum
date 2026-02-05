-- CreateTable
CREATE TABLE "Synopsis" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "description" TEXT,
    "fileUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Synopsis_pkey" PRIMARY KEY ("id")
);
