/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `urls` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "urls" ADD COLUMN     "clicks" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "urls_shortUrl_key" ON "urls"("shortUrl");
