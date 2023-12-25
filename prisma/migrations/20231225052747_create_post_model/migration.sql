-- CreateTable
CREATE TABLE "GamePost" (
    "title" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
