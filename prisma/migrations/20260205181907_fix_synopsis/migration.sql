/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `Synopsis` table. All the data in the column will be lost.
  - Added the required column `filePath` to the `Synopsis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Synopsis" DROP COLUMN "fileUrl",
ADD COLUMN     "filePath" TEXT NOT NULL;
