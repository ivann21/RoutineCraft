const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

async function main() {
  // Primero limpiamos las tablas existentes si es necesario
  // Descomente estas líneas si desea limpiar las tablas antes
  // await prisma.rutinaEjercicio.deleteMany();
  // await prisma.rutina.deleteMany();
  // await prisma.ejercicio.deleteMany();

  console.log('Iniciando seed de ejercicios...');

  // Array de ejercicios para el seed
  const ejercicios = [
    // Ejercicios de Pecho
    {
      nombre: 'Press de Banca',
      descripcion: 'Acuéstate en un banco plano, agarra la barra con un agarre ligeramente más ancho que los hombros. Baja la barra hasta que toque el pecho y luego empuja hacia arriba hasta los brazos estén extendidos.',
      categoria: 'Pecho',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Press de Banca Inclinado',
      descripcion: 'Similar al press de banca, pero en un banco inclinado para enfocarse más en la parte superior del pecho.',
      categoria: 'Pecho',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Aperturas con Mancuernas',
      descripcion: 'Acostado en un banco, sostén las mancuernas con los brazos extendidos sobre el pecho. Baja las mancuernas abriendo los brazos hasta sentir un estiramiento en el pecho, luego regresa a la posición inicial.',
      categoria: 'Pecho',
      esComun: true, // Ejercicio común
    },

    // Ejercicios de Espalda
    {
      nombre: 'Dominadas',
      descripcion: 'Agarra una barra elevada con las palmas hacia adelante y los brazos extendidos. Tira de tu cuerpo hacia arriba hasta que tu barbilla esté por encima de la barra.',
      categoria: 'Espalda',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Remo con Barra',
      descripcion: 'Con las piernas ligeramente flexionadas y la espalda recta, tira de la barra hacia tu abdomen inferior mientras mantienes los codos cerca del cuerpo.',
      categoria: 'Espalda',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Pulldown en Máquina',
      descripcion: 'Sentado en la máquina, agarra la barra ancha con las palmas hacia adelante. Tira de la barra hacia abajo hasta que toque tu pecho y luego controla el movimiento de regreso.',
      categoria: 'Espalda',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Remo en Máquina',
      descripcion: 'Sentado con el pecho contra el soporte, tira de las asas hacia atrás manteniendo la espalda recta y los codos cerca del cuerpo.',
      categoria: 'Espalda',
      esComun: true, // Ejercicio común
    },

    // Ejercicios de Piernas
    {
      nombre: 'Prensa de Piernas',
      descripcion: 'Siéntate en la máquina con los pies en la plataforma a la anchura de los hombros. Empuja la plataforma extendiendo las rodillas y luego regresa controladamente.',
      categoria: 'Piernas',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Extensiones de Cuádriceps',
      descripcion: 'Sentado en la máquina, extiende las piernas levantando el peso con los cuádriceps y luego baja de manera controlada.',
      categoria: 'Piernas',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Curl de Isquiotibiales',
      descripcion: 'Acostado boca abajo en la máquina, dobla las piernas llevando los talones hacia los glúteos, luego regresa lentamente.',
      categoria: 'Piernas',
      esComun: true, // Ejercicio común
    },

    // Ejercicios de Hombros
    {
      nombre: 'Press Militar',
      descripcion: 'Sentado o de pie, empuja una barra desde los hombros hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.',
      categoria: 'Hombros',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Elevaciones Laterales',
      descripcion: 'De pie con mancuernas en las manos a los lados, eleva los brazos hacia los lados hasta que estén paralelos al suelo, manteniendo los codos ligeramente flexionados.',
      categoria: 'Hombros',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Elevaciones Frontales',
      descripcion: 'De pie con mancuernas en las manos frente a los muslos, eleva los brazos hacia el frente hasta que estén paralelos al suelo.',
      categoria: 'Hombros',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Pájaros con Mancuernas',
      descripcion: 'Inclinado hacia adelante con la espalda recta, levanta las mancuernas hacia los lados hasta que los brazos estén paralelos al suelo.',
      categoria: 'Hombros',
      esComun: true, // Ejercicio común
    },

    // Ejercicios de Brazos
    {
      nombre: 'Curl de Bíceps con Barra',
      descripcion: 'De pie, sostén una barra con las palmas hacia arriba. Flexiona los codos para levantar la barra hacia los hombros, manteniendo los codos cerca del cuerpo.',
      categoria: 'Brazos',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Extensiones de Tríceps en Polea',
      descripcion: 'De pie frente a una polea alta, agarra la cuerda con ambas manos. Empuja hacia abajo extendiendo los codos hasta que los brazos estén rectos.',
      categoria: 'Brazos',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Curl de Martillo',
      descripcion: 'De pie con mancuernas en las manos, palmas enfrentadas. Flexiona los codos para levantar las mancuernas manteniendo las palmas enfrentadas durante todo el movimiento.',
      categoria: 'Brazos',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Fondos en Paralelas',
      descripcion: 'Apoyado en barras paralelas, baja el cuerpo flexionando los codos hasta que sientas un estiramiento en el pecho, luego empuja hacia arriba hasta extender los brazos.',
      categoria: 'Brazos',
      esComun: true, // Ejercicio común
    },

    // Ejercicios de Core/Abdomen
    {
      nombre: 'Crunches',
      descripcion: 'Acostado boca arriba con las rodillas flexionadas, levanta los hombros del suelo contrayendo los abdominales y luego baja de manera controlada.',
      categoria: 'Abdomen',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Russian Twist',
      descripcion: 'Sentado con las rodillas flexionadas y el torso inclinado hacia atrás, gira el torso de lado a lado, tocando el suelo a cada lado con las manos.',
      categoria: 'Abdomen',
      esComun: true, // Ejercicio común
    },
    {
      nombre: 'Elevaciones de Piernas',
      descripcion: 'Acostado boca arriba con las manos a los lados o debajo de los glúteos, levanta las piernas rectas hasta que formen un ángulo de 90 grados con el suelo.',
      categoria: 'Abdomen',
      esComun: true, // Ejercicio común
    },
  ];

  // Crear los ejercicios en la base de datos
  for (const ejercicio of ejercicios) {
    await prisma.ejercicio.create({
      data: ejercicio,
    });
  }

  console.log(`Seed completado: ${ejercicios.length} ejercicios comunes creados.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
