const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkChallenges() {
  try {
    console.log('Verificando datos de retos en la base de datos...');
    
    // Contar total de retos
    const totalChallenges = await prisma.challenge.count();
    console.log(`Total de retos en la base de datos: ${totalChallenges}`);
    
    if (totalChallenges > 0) {
      // Obtener todos los retos
      const challenges = await prisma.challenge.findMany();
      console.log('\nLista de retos:');
      challenges.forEach((challenge, index) => {
        console.log(`\n--- Reto ${index + 1} ---`);
        console.log(`ID: ${challenge.id}`);
        console.log(`Título: ${challenge.titulo}`);
        console.log(`Descripción: ${challenge.descripcion}`);
        console.log(`Activo: ${challenge.activo}`);
        console.log(`Fecha inicio: ${challenge.fechaInicio}`);
        console.log(`Fecha fin: ${challenge.fechaFin}`);
        console.log(`Participantes: ${challenge.participantes}`);
        console.log(`Tipo: ${challenge.tipo}`);
        console.log(`Nivel: ${challenge.nivel}`);
      });
    } else {
      console.log('No hay retos en la base de datos.');
    }
    
    console.log('\nPrueba API directamente:');
    console.log('curl http://localhost:5000/api/challenges/active');
    
  } catch (error) {
    console.error('Error al verificar retos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkChallenges();
