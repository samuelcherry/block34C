/*
  Warnings:

  - You are about to drop the column `partCount` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `partyCount` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "partCount",
ADD COLUMN     "partyCount" INTEGER NOT NULL;
