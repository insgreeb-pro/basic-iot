-- CreateTable
CREATE TABLE "Channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "api_key" TEXT NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT NOT NULL,
    "field3" TEXT NOT NULL,
    "field4" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "field1" TEXT,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel.api_key_unique" ON "Channel"("api_key");

-- CreateIndex
CREATE INDEX "Feed.created_at_index" ON "Feed"("created_at");
