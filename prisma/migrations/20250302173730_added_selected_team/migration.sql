/*
  Warnings:

  - Added the required column `selectedTeam` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" ADD COLUMN     "selectedTeam" TEXT NOT NULL;
