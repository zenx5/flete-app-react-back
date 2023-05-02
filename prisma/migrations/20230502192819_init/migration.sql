-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Auction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "start_lat" TEXT NOT NULL DEFAULT '',
    "start_lon" TEXT NOT NULL DEFAULT '',
    "end_lat" TEXT NOT NULL DEFAULT '',
    "end_lon" TEXT NOT NULL DEFAULT '',
    "active" BOOLEAN NOT NULL DEFAULT false,
    "expire_date" DATETIME NOT NULL
);
INSERT INTO "new_Auction" ("active", "description", "expire_date", "id", "image", "name", "price") SELECT "active", "description", "expire_date", "id", "image", "name", "price" FROM "Auction";
DROP TABLE "Auction";
ALTER TABLE "new_Auction" RENAME TO "Auction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
