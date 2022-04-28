/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Feedbacks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feedbacks_userId_key" ON "Feedbacks"("userId");
