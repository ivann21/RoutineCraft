const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkChallenges() {
  try {
    // Verificar si hay retos en la base de datos
    const challengeCount = await prisma.challenge.count();
    console.log(`Total de retos en la base de datos: ${challengeCount}`);

    // Listar retos existentes
    if (challengeCount > 0) {
      const challenges = await prisma.challenge.findMany({
        select: {
          id: true,
          titulo: true,
          activo: true,
          fechaInicio: true,
          fechaFin: true,
          participantes: true
        }
      });
      
      console.log('Lista de retos:');
      challenges.forEach(c => {
        console.log(`- ID: ${c.id}, Título: ${c.titulo}, Activo: ${c.activo}, Participantes: ${c.participantes}`);
        console.log(`  Fecha inicio: ${c.fechaInicio}, Fecha fin: ${c.fechaFin}`);
      });
    }

    // Verificar si la ruta de la API funciona
    console.log('\nPrueba manual: Accede a http://localhost:5000/api/challenges/active para verificar que la API responde correctamente.');
  } catch (error) {
    console.error('Error al verificar retos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkChallenges();
