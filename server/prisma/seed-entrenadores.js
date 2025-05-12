const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

async function seedEntrenadores() {
  try {
    const entrenadores = [
      {
        nombre: 'Carlos Rodríguez',
        especialidad: 'Entrenador Personal',
        descripcion: 'Especialista en entrenamiento de fuerza y acondicionamiento físico. +10 años de experiencia en transformaciones corporales.',
        experiencia: 10,
        precio: 60.00,
        fotoUrl: '/uploads/trainer1.jpg',
        disponible: true,
        calificacion: 4.8,
        certificaciones: ['NSCA-CPT', 'CrossFit Level 2', 'TRX Certified']
      },
      {
        nombre: 'Ana Martínez',
        especialidad: 'Nutricionista',
        descripcion: 'Experta en nutrición deportiva y planes de alimentación personalizados. Máster en Nutrición Deportiva.',
        experiencia: 8,
        precio: 50.00,
        fotoUrl: '/uploads/nutritionist1.jpg',
        disponible: true,
        calificacion: 4.9,
        certificaciones: ['Registered Dietitian', 'Sports Nutrition Specialist']
      },
      {
        nombre: 'David López',
        especialidad: 'Entrenador Personal',
        descripcion: 'Especializado en rehabilitación deportiva y entrenamiento funcional. Experiencia con atletas de élite.',
        experiencia: 12,
        precio: 70.00,
        fotoUrl: '/uploads/trainer2.jpg',
        disponible: true,
        calificacion: 4.7,
        certificaciones: ['NASM-CPT', 'Functional Training Specialist']
      },
      {
        nombre: 'María González',
        especialidad: 'Nutricionista',
        descripcion: 'Especialista en nutrición terapéutica y pérdida de peso. Enfoque en hábitos alimenticios saludables.',
        experiencia: 6,
        precio: 45.00,
        fotoUrl: '/uploads/nutritionist2.jpg',
        disponible: true,
        calificacion: 4.6,
        certificaciones: ['Clinical Nutritionist', 'Weight Management Specialist']
      }
    ];

    for (const entrenador of entrenadores) {
      await prisma.entrenador.create({
        data: entrenador
      });
    }

    console.log('Entrenadores añadidos exitosamente.');
  } catch (error) {
    console.error('Error al añadir entrenadores:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedEntrenadores();
