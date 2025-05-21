const { PrismaClient } = require('./generated/client'); // Modificado para apuntar directamente
const prisma = new PrismaClient();

async function main() {
  console.log('Empezando el seed de retos...');

  const challengesData = [
    {
      titulo: "Desafío de Fuerza Total - 4 Semanas",
      descripcion: "Un programa intensivo de 4 semanas para aumentar tu fuerza general y masa muscular. Incluye levantamientos compuestos y accesorios.",
      activo: true,
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000), // 28 días desde ahora
      participantes: 0,
      nivel: "Intermedio",
      tipo: "Fuerza",
      objetivos: ["Completar todos los entrenamientos programados", "Incrementar el peso en sentadillas, press de banca y peso muerto en al menos un 5%", "Registrar cada sesión"],
      recompensa: "Insignia 'Titán de Hierro' + 750 puntos de experiencia"
    },
    {
      titulo: "Maratón de Cardio: 100km en 30 Días",
      descripcion: "Acumula 100 kilómetros de actividad cardiovascular (correr, bicicleta, elíptica) en 30 días. ¡Supera tus límites!",
      activo: true,
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
      participantes: 0,
      nivel: "Avanzado",
      tipo: "Cardio",
      objetivos: ["Registrar 100km de cardio", "Mantener un ritmo constante", "Variar las actividades cardiovasculares"],
      recompensa: "Insignia 'Corazón de Acero' + 1000 puntos"
    },
    {
      titulo: "Flexibilidad Felina: Reto de 21 Días",
      descripcion: "Mejora tu flexibilidad y movilidad con una rutina diaria de estiramientos durante 21 días. Ideal para reducir la rigidez y prevenir lesiones.",
      activo: true,
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 21 días
      participantes: 0,
      nivel: "Todos los niveles",
      tipo: "Flexibilidad",
      objetivos: ["Completar la rutina de estiramientos diariamente", "Aumentar el rango de movimiento en articulaciones clave", "Sentirse más ágil y relajado"],
      recompensa: "Insignia 'Gato Elástico' + 400 puntos"
    },
    {
      titulo: "Transformación Abdominal: 6 Semanas al Six-Pack",
      descripcion: "Un plan de 6 semanas enfocado en fortalecer y definir tus abdominales. Combina ejercicios específicos con recomendaciones nutricionales.",
      activo: true,
      fechaInicio: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Empieza en 1 semana
      fechaFin: new Date(Date.now() + (7 + 42) * 24 * 60 * 60 * 1000), // 6 semanas después de que empiece
      participantes: 0,
      nivel: "Intermedio",
      tipo: "Core",
      objetivos: ["Seguir el plan de ejercicios abdominales 3-4 veces por semana", "Mantener una dieta equilibrada", "Reducir el porcentaje de grasa corporal"],
      recompensa: "Insignia 'Abdomen de Acero' + 600 puntos"
    },
    {
      titulo: "Reto de Resistencia: Supera tus Límites",
      descripcion: "Aumenta tu resistencia muscular y cardiovascular con entrenamientos de alta intensidad y circuitos durante 4 semanas.",
      activo: true,
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000), // 4 semanas
      participantes: 0,
      nivel: "Avanzado",
      tipo: "Resistencia",
      objetivos: ["Completar 3-4 sesiones de HIIT/circuito por semana", "Mejorar tiempos en ejercicios de referencia", "Disminuir tiempos de recuperación"],
      recompensa: "Insignia 'Máquina Imparable' + 800 puntos"
    },
    {
      titulo: "Iniciación al Yoga: Paz y Equilibrio en 15 Días",
      descripcion: "Descubre los beneficios del yoga con este reto de 15 días diseñado para principiantes. Aprende posturas básicas y técnicas de respiración.",
      activo: true,
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 días
      participantes: 0,
      nivel: "Principiante",
      tipo: "Yoga",
      objetivos: ["Practicar yoga diariamente durante 15 días", "Aprender 10 posturas básicas", "Mejorar el equilibrio y la concentración"],
      recompensa: "Insignia 'Yogui Novato' + 300 puntos"
    }
  ];

  for (const data of challengesData) {
    await prisma.challenge.create({
      data,
    });
  }

  console.log('Seed de retos completado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
