const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

async function main() {
  // Agrega el campo 'valorNecesario' requerido por tu modelo Achievement
  await prisma.achievement.create({
    data: {
      titulo: '¡Primer reto completado!',
      descripcion: 'Has completado tu primer reto.',
      icono: '🏅',
      tipo: 'primer_reto',
      criterio: 'primer_reto',
      valorNecesario: 1
    }
  });
  await prisma.achievement.create({
    data: {
      titulo: '¡Cinco retos completados!',
      descripcion: 'Has completado 5 retos.',
      icono: '🥇',
      tipo: 'cinco_retos',
      criterio: 'cinco_retos',
      valorNecesario: 5
    }
  });
  await prisma.achievement.create({
    data: {
      titulo: '¡Cinco retos de una categoría!',
      descripcion: 'Has completado 5 retos de una misma categoría.',
      icono: '🏆',
      tipo: 'cinco_categoria',
      criterio: 'cinco_categoria',
      valorNecesario: 5
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
