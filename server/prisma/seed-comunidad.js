const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

async function main() {
  // Crea algunos usuarios si no existen (contraseña en texto plano solo para pruebas)
  const users = [
    { nombre: 'Ana', email: 'ana@demo.com', contraseña: '1234' },
    { nombre: 'Carlos', email: 'carlos@demo.com', contraseña: '1234' },
    { nombre: 'Laura', email: 'laura@demo.com', contraseña: '1234' },
  ];

  for (const user of users) {
    await prisma.usuario.upsert({
      where: { email: user.email },
      update: {},
      create: {
        nombre: user.nombre,
        email: user.email,
        contraseña: user.contraseña,
      },
    });
  }

  const ana = await prisma.usuario.findUnique({ where: { email: 'ana@demo.com' } });
  const carlos = await prisma.usuario.findUnique({ where: { email: 'carlos@demo.com' } });
  const laura = await prisma.usuario.findUnique({ where: { email: 'laura@demo.com' } });

  // Crea algunos posts de comunidad
  // Usa create en vez de createMany si tu modelo se llama "post" (ajusta el nombre si es "Post" o "posts")
  await prisma.post.create({
    data: {
      titulo: '¡Hola comunidad!',
      contenido: 'Estoy emocionada de empezar mi viaje fitness. ¿Algún consejo para principiantes?',
      usuarioId: ana.id,
    },
  });
  await prisma.post.create({
    data: {
      titulo: 'Mi progreso en 1 mes',
      contenido: 'He logrado mantenerme constante y ya veo resultados. ¡Ánimo a todos!',
      usuarioId: carlos.id,
    },
  });
  await prisma.post.create({
    data: {
      titulo: '¿Rutinas para fuerza?',
      contenido: '¿Alguien recomienda una rutina para ganar fuerza en tren superior?',
      usuarioId: laura.id,
    },
  });

  // Si tienes modelos de likes/comentarios para posts, puedes añadirlos aquí.
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
