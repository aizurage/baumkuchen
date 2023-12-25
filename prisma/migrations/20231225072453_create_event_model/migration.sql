/*
  Warnings:

  - Added the required column `updatedAt` to the `EventUserInterface` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventUserInterface" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EventUserInterface" ("id", "userid") SELECT "id", "userid" FROM "EventUserInterface";
DROP TABLE "EventUserInterface";
ALTER TABLE "new_EventUserInterface" RENAME TO "EventUserInterface";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
