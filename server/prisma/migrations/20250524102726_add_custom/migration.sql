/*
  Warnings:

  - Added the required column `updatedAt` to the `Ejercicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ejercicio" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "esComun" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usuarioId" INTEGER;

-- CreateIndex
CREATE INDEX "Ejercicio_usuarioId_idx" ON "Ejercicio"("usuarioId");

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
