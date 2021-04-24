/*
  Warnings:

  - You are about to drop the `Feed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Feed";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Feeds" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "field1" TEXT,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "channelId" INTEGER NOT NULL,
    FOREIGN KEY ("channelId") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Feeds.created_at_index" ON "Feeds"("created_at");
