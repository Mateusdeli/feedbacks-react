/*
  Warnings:

  - Added the required column `userId` to the `Feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedbacks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Feedbacks" ("date", "id", "message", "type") SELECT "date", "id", "message", "type" FROM "Feedbacks";
DROP TABLE "Feedbacks";
ALTER TABLE "new_Feedbacks" RENAME TO "Feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
