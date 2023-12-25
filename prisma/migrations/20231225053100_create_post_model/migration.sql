-- CreateTable
CREATE TABLE "GamePost" (
    "title" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creatorid" INTEGER NOT NULL,
    "time" DATETIME
);

-- CreateTable
CREATE TABLE "EventUserInterface" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");
