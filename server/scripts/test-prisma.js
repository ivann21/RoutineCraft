const { PrismaClient } = require('../prisma/generated/client');

async function testConnection() {
  const prisma = new PrismaClient();
  try {
    // Intenta una consulta simple
    const count = await prisma.usuario.count();
    console.log(`Conexión exitosa. Hay ${count} usuarios en la base de datos.`);
  } catch (error) {
    console.error('Error al conectar con Prisma:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
