/*
  Warnings:

  - The primary key for the `EventUserInterface` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `postid` to the `EventUserInterface` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventUserInterface" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postid" INTEGER NOT NULL,
    "userid" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EventUserInterface" ("createdAt", "id", "updatedAt", "userid") SELECT "createdAt", "id", "updatedAt", "userid" FROM "EventUserInterface";
DROP TABLE "EventUserInterface";
ALTER TABLE "new_EventUserInterface" RENAME TO "EventUserInterface";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
