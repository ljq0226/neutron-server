/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `tweet` table. All the data in the column will be lost.
  - Made the column `content` on table `tweet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `tweet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `tweet` DROP FOREIGN KEY `Tweet_userId_fkey`;

-- AlterTable
ALTER TABLE `tweet` DROP COLUMN `updatedAt`,
    MODIFY `content` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tweet` ADD CONSTRAINT `Tweet_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
