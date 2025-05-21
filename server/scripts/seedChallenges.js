/**
 * Script para sembrar datos de retos en la base de datos
 */

// Importación directa desde el directorio generado específico
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

// Datos de retos
const challengesData = [
  {
    titulo: "Desafío 30 días de fuerza",
    descripcion: "Completa 30 días seguidos de entrenamiento de fuerza para mejorar tu musculatura y fuerza general. Ideal para personas que quieren ver resultados significativos en un mes.",
    activo: true,
    fechaInicio: new Date(),
    fechaFin: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    participantes: 125,
    nivel: "Intermedio",
    tipo: "Fuerza",
    objetivos: [
      "Completar 30 entrenamientos de fuerza",
      "Aumentar peso en ejercicios básicos",
      "Documentar tu progreso con fotos"
    ],
    recompensa: "Insignia de Fuerza + 500 puntos de experiencia"
  },
  {
    titulo: "Reto cardio semanal",
    descripcion: "Realiza 5 sesiones de cardio esta semana para mejorar tu resistencia cardiovascular. Este reto es perfecto para principiantes que buscan mejorar su condición física.",
    activo: true,
    fechaInicio: new Date(),
    fechaFin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    participantes: 87,
    nivel: "Principiante",
    tipo: "Cardio",
    objetivos: [
      "Completar 5 sesiones de cardio",
      "Mínimo 20 minutos por sesión",
      "Mantener ritmo cardíaco elevado"
    ],
    recompensa: "Insignia de Resistencia + 200 puntos de experiencia"
  },
  {
    titulo: "Desafío de flexibilidad",
    descripcion: "Mejora tu flexibilidad en 21 días con una rutina diaria de estiramientos. Ideal para todas las personas que quieren mejorar su movilidad y prevenir lesiones.",
    activo: true,
    fechaInicio: new Date(),
    fechaFin: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    participantes: 64,
    nivel: "Todos los niveles",
    tipo: "Flexibilidad",
    objetivos: [
      "Realizar una rutina diaria de estiramientos",
      "Aumentar tu rango de movimiento",
      "Compartir una fotografía antes/después"
    ],
    recompensa: "Insignia de Flexibilidad + 300 puntos de experiencia"
  },
  {
    titulo: "Reto de entrenamiento funcional",
    descripcion: "Mejora tu equilibrio, coordinación y fuerza con 14 días de ejercicios funcionales. Perfecto para quienes buscan mejorar su funcionalidad en la vida diaria.",
    activo: true,
    fechaInicio: new Date(),
    fechaFin: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    participantes: 42,
    nivel: "Intermedio",
    tipo: "Equilibrio",
    objetivos: [
      "Completar 14 entrenamientos funcionales",
      "Mejorar equilibrio y coordinación",
      "Realizar ejercicios con peso corporal"
    ],
    recompensa: "Insignia de Funcionalidad + 250 puntos de experiencia"
  },
  {
    titulo: "Reto de resistencia progresiva",
    descripcion: "Aumenta gradualmente tu resistencia durante 28 días. Este desafío te ayudará a superar tus límites actuales con incrementos graduales de dificultad.",
    activo: true,
    fechaInicio: new Date(),
    fechaFin: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    participantes: 53,
    nivel: "Avanzado",
    tipo: "Resistencia",
    objetivos: [
      "Aumentar tiempo o distancia cada semana",
      "Mantener una frecuencia de 4 días por semana",
      "Registrar métricas de rendimiento"
    ],
    recompensa: "Insignia de Superación + 400 puntos de experiencia"
  }
];

// Datos de logros
const achievementsData = [
  {
    titulo: "Primer mes completado",
    descripcion: "Has completado tu primer mes de entrenamiento consecutivo",
    tipo: "Constancia",
    icono: "🏆",
    criterio: "dias_activos",
    valorNecesario: 30
  },
  {
    titulo: "Maestro de rutinas",
    descripcion: "Has creado más de 5 rutinas personalizadas",
    tipo: "Creatividad",
    icono: "🌟",
    criterio: "rutinas_creadas",
    valorNecesario: 5
  },
  {
    titulo: "Conquistador de retos",
    descripcion: "Has completado 3 retos con éxito",
    tipo: "Superación",
    icono: "🔥",
    criterio: "retos_completados",
    valorNecesario: 3
  },
  {
    titulo: "Experto en cardio",
    descripcion: "Has completado 10 entrenamientos de cardio",
    tipo: "Especialización",
    icono: "❤️",
    criterio: "entrenamientos_tipo",
    valorNecesario: 10
  }
];

// Función principal para sembrar datos
async function main() {
  try {
    console.log('Comenzando a poblar la base de datos...');
    
    // Limpiar datos existentes con manejo de errores individual
    console.log('Eliminando datos previos...');
    try {
      await prisma.userAchievement.deleteMany({});
      console.log('- Datos de UserAchievement eliminados');
    } catch (error) {
      console.error('Error al eliminar UserAchievement:', error.message);
    }
    
    try {
      await prisma.userChallenge.deleteMany({});
      console.log('- Datos de UserChallenge eliminados');
    } catch (error) {
      console.error('Error al eliminar UserChallenge:', error.message);
    }
    
    try {
      await prisma.achievement.deleteMany({});
      console.log('- Datos de Achievement eliminados');
    } catch (error) {
      console.error('Error al eliminar Achievement:', error.message);
    }
    
    try {
      await prisma.challenge.deleteMany({});
      console.log('- Datos de Challenge eliminados');
    } catch (error) {
      console.error('Error al eliminar Challenge:', error.message);
    }
    
    // Crear retos
    console.log('Creando retos...');
    for (const challengeData of challengesData) {
      try {
        await prisma.challenge.create({
          data: challengeData
        });
        console.log(`- Reto "${challengeData.titulo}" creado`);
      } catch (error) {
        console.error(`Error al crear reto "${challengeData.titulo}":`, error.message);
      }
    }
    
    // Crear logros
    console.log('Creando logros...');
    for (const achievementData of achievementsData) {
      try {
        await prisma.achievement.create({
          data: achievementData
        });
        console.log(`- Logro "${achievementData.titulo}" creado`);
      } catch (error) {
        console.error(`Error al crear logro "${achievementData.titulo}":`, error.message);
      }
    }
    
    console.log('Base de datos poblada correctamente.');
  } catch (error) {
    console.error('Error general al poblar la base de datos:', error.message);
  } finally {
    await prisma.$disconnect();
    console.log('Conexión a la base de datos cerrada.');
  }
}

// Ejecutar la función principal
main()
  .then(() => console.log('Proceso completado'))
  .catch(error => {
    console.error('Error no controlado:', error);
    process.exit(1);
  });
