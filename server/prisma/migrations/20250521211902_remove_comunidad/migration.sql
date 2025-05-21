/*
  Warnings:

  - You are about to drop the column `publica` on the `Rutina` table. All the data in the column will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_rutinaId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Rutina" DROP COLUMN "publica";

-- DropTable
DROP TABLE "Like";
