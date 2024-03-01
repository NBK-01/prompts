/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `id` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
