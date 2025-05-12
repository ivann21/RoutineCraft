-- CreateTable
CREATE TABLE "Entrenador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "experiencia" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "fotoUrl" TEXT,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "calificacion" DOUBLE PRECISION,
    "certificaciones" TEXT[],

    CONSTRAINT "Entrenador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contratacion" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "entrenadorId" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3),
    "estado" TEXT NOT NULL,
    "planSeleccionado" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Contratacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contratacion" ADD CONSTRAINT "Contratacion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contratacion" ADD CONSTRAINT "Contratacion_entrenadorId_fkey" FOREIGN KEY ("entrenadorId") REFERENCES "Entrenador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
