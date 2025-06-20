require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 5000;
const { PrismaClient } = require('./prisma/generated/client');
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Crear la carpeta 'uploads' si no existe
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de multer para almacenar imágenes en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Middleware
app.use(cors({
  origin: [
    process.env.CLIENT_URL || '*',
    'https://routine-craft.vercel.app',
    'https://routinecraft.vercel.app',
    'http://localhost:5173',
    /\.vercel\.app$/
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Servir archivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, desde el servidor!');
});

// Límites de rutinas por plan
const PLAN_LIMITS = {
  free: 5,  
  basic: 50,
  premium: Infinity
};

// Obtener todas las rutinas desde la base de datos
app.get('/api/rutinas', async (req, res) => {
  try {
    const rutinas = await prisma.rutina.findMany({
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          }
        }
      }
    });
    res.json(rutinas);
  } catch (error) {
    console.error('Error al obtener rutinas:', error);
    res.status(500).json({ error: 'Error al obtener rutinas' });
  }
});

// Ruta para obtener rutinas de un usuario específico
app.get('/api/rutinas/:usuarioId', async (req, res) => {
  let { usuarioId } = req.params;
  try {
    usuarioId = Number(usuarioId);
    if (!usuarioId || isNaN(usuarioId)) {
      return res.status(400).json({ error: 'usuarioId inválido' });
    }
    const rutinas = await prisma.rutina.findMany({
      where: { usuarioId }, 
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          },
          orderBy: {
            orden: 'asc'
          }
        }
      }
    });
    res.json(rutinas);
  } catch (error) {
    console.error('Error al obtener rutinas del usuario:', error);
    res.status(500).json({ error: 'Error al obtener rutinas del usuario' });
  }
});

// Ruta para añadir una nueva rutina
app.post('/api/rutinas', async (req, res) => {
  const { nombre, descripcion, usuarioId, ejercicios } = req.body;

  console.log('Datos recibidos para crear rutina:', { nombre, descripcion, usuarioId, ejercicios });

  try {
    // Verificar el límite del plan del usuario
    const usuario = await prisma.usuario.findUnique({
      where: { id: parseInt(usuarioId) },
      include: {
        rutinas: true,
      },
    });

    const planLimit = PLAN_LIMITS[usuario.plan];
    if (usuario.rutinas.length >= planLimit) {
      return res.status(403).json({
        error: 'Has alcanzado el límite de rutinas para tu plan actual'
      });
    }

    // Primero creamos la rutina
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        descripcion,
        usuarioId: parseInt(usuarioId),
      },
    });

    // Luego creamos los registros en RutinaEjercicio
    if (ejercicios && ejercicios.length > 0) {
      const rutinaEjercicioData = ejercicios.map((ejercicio, index) => ({
        rutinaId: nuevaRutina.id,
        ejercicioId: parseInt(ejercicio.id),
        series: parseInt(ejercicio.series),
        repeticiones: parseInt(ejercicio.repeticiones),
        descansoSegundos: parseInt(ejercicio.descansoSegundos),
        orden: parseInt(ejercicio.orden || index + 1)
      }));

      console.log('Datos para RutinaEjercicio:', rutinaEjercicioData);

      await prisma.rutinaEjercicio.createMany({
        data: rutinaEjercicioData
      });
    }

    // Recuperamos la rutina completa con sus ejercicios
    const rutinaCompleta = await prisma.rutina.findUnique({
      where: { id: nuevaRutina.id      },
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          },
          orderBy: {
            orden: 'asc'
          }
        }
      }
    });

    console.log('Rutina creada con ejercicios:', rutinaCompleta);
    res.status(201).json(rutinaCompleta);
  } catch (error) {
    console.error('Error al crear una nueva rutina:', error);
    res.status(500).json({ error: 'Error al crear una nueva rutina' });
  }
});

// Ruta para obtener detalles de una rutina específica
app.get('/api/rutina/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const rutina = await prisma.rutina.findUnique({
      where: { id: parseInt(id) },
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          },
          orderBy: {
            orden: 'asc'
          }
        }
      }
    });
    
    if (!rutina) {
      return res.status(404).json({ error: 'Rutina no encontrada' });
    }
    res.json(rutina);
  } catch (error) {
    console.error('Error al obtener detalles de la rutina:', error);
    res.status(500).json({ error: 'Error al obtener detalles de la rutina' });
  }
});

// Ruta para eliminar una rutina existente
app.delete('/api/rutinas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // First delete related records in RutinaEjercicio
    await prisma.rutinaEjercicio.deleteMany({
      where: { rutinaId: parseInt(id) },
    });

    // Then delete related calendar entries 
    await prisma.calendario.deleteMany({
      where: { rutinaId: parseInt(id) },
    });
    
    // Finally, delete the rutina
    await prisma.rutina.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar la rutina:', error);
    res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
});

// Ruta para actualizar una rutina existente
app.put('/api/rutinas/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, ejercicios, usuarioId } = req.body;

  console.log('Datos recibidos para actualizar rutina:', { nombre, descripcion, ejercicios, usuarioId });

  try {
    // Verificar que la rutina pertenece al usuario
    const rutina = await prisma.rutina.findUnique({
      where: { id: parseInt(id) },
    });

    if (!rutina || rutina.usuarioId !== parseInt(usuarioId)) {
      return res.status(403).json({ error: 'No tienes permiso para actualizar esta rutina.' });
    }

    // Actualizar la rutina
    const rutinaActualizada = await prisma.rutina.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        descripcion,
      },
    });

    // Eliminar registros existentes primero
    await prisma.rutinaEjercicio.deleteMany({
      where: { rutinaId: parseInt(id) },
    });

    // Crear nuevos ejercicios uno por uno para evitar errores de clave foránea
    if (ejercicios && ejercicios.length > 0) {
      for (const ejercicio of ejercicios) {
        try {
          // Validar y convertir IDs a números
          const ejercicioId = parseInt(ejercicio.ejercicioId);
          if (isNaN(ejercicioId)) continue; // Saltamos el ejercicio si el ID no es válido
          
          // Verificar que el ejercicio existe
          const ejercicioExistente = await prisma.ejercicio.findUnique({
            where: { id: ejercicioId }
          });
          
          if (!ejercicioExistente) {
            console.warn(`Ejercicio con ID ${ejercicioId} no existe y será omitido`);
            continue; // Saltamos este ejercicio
          }

          // Crear el registro RutinaEjercicio para este ejercicio válido
          await prisma.rutinaEjercicio.create({
            data: {
              rutinaId: parseInt(id),
              ejercicioId: ejercicioId,
              series: parseInt(ejercicio.series) || 3,
              repeticiones: parseInt(ejercicio.repeticiones) || 12,
              descansoSegundos: parseInt(ejercicio.descansoSegundos) || 60,
              orden: parseInt(ejercicio.orden) || 1
            }
          });
        } catch (ejercicioError) {
          console.error(`Error al crear ejercicio para rutina. Detalles:`, ejercicioError);
          // Continuamos con el siguiente ejercicio incluso si este falla
        }
      }
    }

    // Obtener la rutina actualizada con sus ejercicios para devolverla en la respuesta
    const rutinaConEjercicios = await prisma.rutina.findUnique({
      where: { id: parseInt(id) },
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          },
          orderBy: {
            orden: 'asc'
          }
        }
      }
    });

    res.json(rutinaConEjercicios);
  } catch (error) {
    console.error('Error al actualizar la rutina:', error);
    res.status(500).json({ error: 'Error al actualizar la rutina.' });
  }
});

// Ruta para registrar usuarios
app.post("/register", async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  if (!contraseña || contraseña.trim() === "") {
    return res.status(400).json({ error: "La contraseña es requerida." });
  }

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya está registrado." });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear el usuario en la base de datos
    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        email,
        contraseña: hashedPassword,
      },
    });

    // Modifico la respuesta para excluir la contraseña
    res.status(201).json({
      message: "Usuario registrado con éxito.",
      user: {
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Generar un token de sesión (puedes usar JWT aquí si lo deseas)
    const token = "fake-jwt-token"; // Reemplaza esto con una implementación real de JWT

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para subir una foto de perfil y actualizar la base de datos
app.post("/upload-profile-pic", upload.single("profilePic"), async (req, res) => {
  const userId = req.body.userId; // Asegúrate de que el cliente envíe el ID del usuario

  if (!userId) {
    return res.status(400).json({ error: "El ID del usuario es requerido." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "No se subió ninguna imagen." });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  try {
    // Obtener la URL de la foto anterior
    const user = await prisma.usuario.findUnique({
      where: { id: parseInt(userId) },
    });

    if (user && user.fotoUrl) {
      const oldPhotoPath = path.join(__dirname, user.fotoUrl);
      if (fs.existsSync(oldPhotoPath)) {
        fs.unlinkSync(oldPhotoPath); // Eliminar la foto anterior
      }
    }

    // Actualizar la URL de la foto en la base de datos
    await prisma.usuario.update({
      where: { id: parseInt(userId) },
      data: { fotoUrl: imageUrl },
    });

    res.status(200).json({ message: "Imagen subida y actualizada con éxito.", imageUrl });
  } catch (error) {
    console.error("Error al actualizar la foto de perfil:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para obtener los datos del perfil del usuario
app.get("/api/profile/:id", async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nombre: true,
        email: true,
        fotoUrl: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Obtener todos los ejercicios (comunes + personalizados del usuario)
app.get('/api/ejercicios', async (req, res) => {
  try {
    const usuarioId = req.query.usuarioId ? parseInt(req.query.usuarioId) : null;
    
    // Consulta para obtener ejercicios comunes y personalizados del usuario
    const where = {
      OR: [
        { esComun: true }, // Ejercicios comunes para todos
      ]
    };
    
    // Si hay un ID de usuario, incluir también sus ejercicios personalizados
    if (usuarioId) {
      where.OR.push({ usuarioId: usuarioId });
    }
    
    const ejercicios = await prisma.ejercicio.findMany({
      where,
      orderBy: [
        { categoria: 'asc' },
        { nombre: 'asc' }
      ],
    });
    
    res.json(ejercicios);
  } catch (error) {
    console.error('Error al obtener ejercicios:', error);
    res.status(500).json({ error: 'Error al obtener ejercicios' });
  }
});

// Ruta para añadir un nuevo ejercicio
app.post('/api/ejercicios', upload.single('imagen'), async (req, res) => {
  const { nombre, descripcion, categoria, usuarioId } = req.body;
  const imagen = req.file ? req.file.path : null;
  
  try {
    // Siempre crear como ejercicio personalizado si viene de un usuario
    const esComun = false; // Cambio fundamental: todos los ejercicios creados por usuarios son personalizados
    
    if (!usuarioId) {
      return res.status(400).json({ error: 'Se requiere ID de usuario para crear ejercicios personalizados' });
    }

    const nuevoEjercicio = await prisma.ejercicio.create({
      data: {
        nombre,
        descripcion,
        categoria,
        esComun,
        usuarioId: parseInt(usuarioId),
        ...(imagen && { imagenUrl: imagen }),
      },
    });

    res.status(201).json(nuevoEjercicio);
  } catch (error) {
    console.error('Error al añadir el ejercicio:', error);
    res.status(500).json({ error: 'Error al añadir el ejercicio' });
  }
});

// Ruta para actualizar un ejercicio existente
app.put('/api/ejercicios/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria } = req.body;
  const imagen = req.file ? req.file.path : null;

  try {
    const ejercicioActualizado = await prisma.ejercicio.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        descripcion,
        categoria,
        ...(imagen && { imagenUrl: imagen }),
      },
    });

    res.json(ejercicioActualizado);
  } catch (error) {
    console.error('Error al actualizar el ejercicio:', error);
    res.status(500).json({ error: 'Error al actualizar el ejercicio' });
  }
});

// Ruta para eliminar un ejercicio existente
app.delete('/api/ejercicios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // First check if exercise is used in any routine
    const exerciseInUse = await prisma.rutinaEjercicio.findFirst({
      where: { ejercicioId: parseInt(id) },
    });

    if (exerciseInUse) {
      return res.status(409).json({ 
        error: 'Este ejercicio está siendo usado en una rutina y no puede ser eliminado',
        message: 'Por favor, elimina este ejercicio de tus rutinas antes de borrarlo'
      });
    }

    // If not in use, proceed with deletion
    await prisma.ejercicio.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el ejercicio:', error);
    res.status(500).json({ error: 'Error al eliminar el ejercicio' });
  }
});

// Ruta para obtener todos los entrenadores
app.get('/api/entrenadores', async (req, res) => {
  try {
    const entrenadores = await prisma.entrenador.findMany();
    res.json(entrenadores);
  } catch (error) {
    console.error('Error al obtener entrenadores:', error);
    res.status(500).json({ error: 'Error al obtener entrenadores' });
  }
});

// Ruta para obtener un entrenador específico
app.get('/api/entrenadores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const entrenador = await prisma.entrenador.findUnique({
      where: { id: parseInt(id) },
      include: {
        contrataciones: true
      }
    });
    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }
    res.json(entrenador);
  } catch (error) {
    console.error('Error al obtener el entrenador:', error);
    res.status(500).json({ error: 'Error al obtener el entrenador' });
  }
});

// Ruta para crear una nueva contratación
app.post('/api/contrataciones', async (req, res) => {
  const { entrenadorId, usuarioId, planSeleccionado, fechaInicio } = req.body;

  try {
    // Verificar si ya existe una contratación activa
    const contratacionActiva = await prisma.contratacion.findFirst({
      where: {
        usuarioId: parseInt(usuarioId),
        entrenadorId: parseInt(entrenadorId),
        estado: 'activa'
      }
    });

    if (contratacionActiva) {
      return res.status(400).json({ error: 'Ya tienes una contratación activa con este entrenador' });
    }

    // Obtener el precio base del entrenador
    const entrenador = await prisma.entrenador.findUnique({
      where: { id: parseInt(entrenadorId) }
    });

    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }

    // Calcular el precio según el plan
    const multiplicadores = {
      mensual: 1,
      trimestral: 2.7,
      anual: 10
    };

    const precio = entrenador.precio * multiplicadores[planSeleccionado];

    // Calcular la fecha de fin según el plan
    let fechaFin = new Date(fechaInicio);
    switch (planSeleccionado) {
      case 'mensual':
        fechaFin.setMonth(fechaFin.getMonth() + 1);
        break;
      case 'trimestral':
        fechaFin.setMonth(fechaFin.getMonth() + 3);
        break;
      case 'anual':
        fechaFin.setFullYear(fechaFin.getFullYear() + 1);
        break;
    }

    const nuevaContratacion = await prisma.contratacion.create({
      data: {
        usuario: { connect: { id: parseInt(usuarioId) } },
        entrenador: { connect: { id: parseInt(entrenadorId) } },
        fechaInicio: new Date(fechaInicio),
        fechaFin,
        estado: 'activa',
        planSeleccionado,
        precio
      }
    });

    res.status(201).json(nuevaContratacion);
  } catch (error) {
    console.error('Error al crear la contratación:', error);
    res.status(500).json({ error: 'Error al crear la contratación' });
  }
});

// Ruta para obtener las contrataciones de un usuario
app.get('/api/contrataciones/usuario/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const contrataciones = await prisma.contratacion.findMany({
      where: { usuarioId: parseInt(usuarioId) },
      include: {
        entrenador: true
      }
    });
    res.json(contrataciones);
  } catch (error) {
    console.error('Error al obtener las contrataciones:', error);
    res.status(500).json({ error: 'Error al obtener las contrataciones' });
  }
});

// Ruta para obtener los eventos del calendario de un usuario
app.get('/api/calendario/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const eventos = await prisma.calendario.findMany({
      where: { usuarioId: parseInt(usuarioId) },
      include: {
        rutina: true
      },
      orderBy: {
        fecha: 'asc'
      }
    });
    res.json(eventos);
  } catch (error) {
    console.error('Error al obtener eventos del calendario:', error);
    res.status(500).json({ error: 'Error al obtener eventos del calendario' });
  }
});

// Ruta para programar una rutina en el calendario
app.post('/api/calendario', async (req, res) => {
  const { usuarioId, rutinaId, fecha } = req.body;
  try {
    const nuevoEvento = await prisma.calendario.create({
      data: {
        usuarioId: parseInt(usuarioId),
        rutinaId: parseInt(rutinaId),
        fecha: new Date(fecha)
      },
      include: {
        rutina: true
      }
    });
    res.status(201).json(nuevoEvento);
  } catch (error) {
    console.error('Error al programar rutina:', error);
    res.status(500).json({ error: 'Error al programar rutina' });
  }
});

// Ruta para eliminar un evento del calendario
app.delete('/api/calendario/:eventoId', async (req, res) => {
  const { eventoId } = req.params;
  try {
    // Verificar primero si el evento existe
    const evento = await prisma.calendario.findUnique({
      where: { id: parseInt(eventoId) }
    });
    
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado', message: 'El evento que intentas eliminar ya no existe' });
    }
    
    // Si existe, entonces lo eliminamos
    await prisma.calendario.delete({
      where: { id: parseInt(eventoId) }
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar evento:', error);
    res.status(500).json({ error: 'Error al eliminar evento' });
  }
});

// --- INICIO DE RUTAS DE CHALLENGES ---

// Ruta de prueba para challenges
app.get('/api/challenges/test', (req, res) => {
  res.json({
    message: 'API de retos funcionando correctamente desde server.js con Prisma',
    timestamp: new Date()
  });
});

// Obtener todos los retos activos (que no han finalizado y están marcados como activos)
app.get('/api/challenges/active', async (req, res) => {
  try {
    const activeChallenges = await prisma.challenge.findMany({
      where: {
        activo: true,
        fechaFin: {
          gte: new Date() // gte: greater than or equal to (para incluir retos que terminan hoy)
        }
      },
      orderBy: {
        fechaInicio: 'desc'
      }
    });
    res.json(activeChallenges);
  } catch (error) {
    console.error('Error al obtener retos activos:', error);
    res.status(500).json({
      message: 'Error al obtener retos activos',
      error: error.message
    });
  }
});

// Obtener retos en los que un usuario está participando
app.get('/api/challenges/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const userChallenges = await prisma.userChallenge.findMany({
      where: { userId: parseInt(userId) },
      include: {
        challenge: true // Incluir los detalles del reto asociado
      },
      orderBy: {
        fechaInicio: 'desc'
      }
    });
    res.json(userChallenges);
  } catch (error)
{
    console.error(`Error al obtener retos para el usuario ${userId}:`, error);
    res.status(500).json({
      message: `Error al obtener retos para el usuario ${userId}`,
      error: error.message
    });
  }
});

// Obtener retos completados por un usuario
app.get('/api/challenges/completed/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const completedChallenges = await prisma.userChallenge.findMany({
      where: {
        userId: parseInt(userId),
        completado: true
      },
      include: {
        challenge: true
      },
      orderBy: {
        ultimoProgreso: 'desc' // O fechaConseguido si tuvieras ese campo en UserChallenge
      }
    });
    res.json(completedChallenges);
  } catch (error) {
    console.error(`Error al obtener retos completados para el usuario ${userId}:`, error);
    res.status(500).json({
      message: `Error al obtener retos completados para el usuario ${userId}`,
      error: error.message
    });
  }
});

// Unirse a un reto
app.post('/api/challenges/join', async (req, res) => {
  const { userId, challengeId } = req.body;

  if (!userId || !challengeId) {
    return res.status(400).json({ message: 'userId y challengeId son requeridos.' });
  }

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { id: parseInt(challengeId) }
    });

    if (!challenge) {
      return res.status(404).json({ message: 'Reto no encontrado.' });
    }
    if (!challenge.activo || new Date(challenge.fechaFin) < new Date()) {
      return res.status(400).json({ message: 'Este reto ya no está activo o ha finalizado.' });
    }

    const user = await prisma.usuario.findUnique({
      where: { id: parseInt(userId) }
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const existingParticipation = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      }
    });

    if (existingParticipation) {
      return res.status(409).json({ message: 'Ya estás participando en este reto.', userChallenge: existingParticipation });
    }

    const newUserChallenge = await prisma.userChallenge.create({
      data: {
        userId: parseInt(userId),
        challengeId: parseInt(challengeId),
        progreso: 0,
        completado: false,
        fechaInicio: new Date(),
        ultimoProgreso: new Date()
      },
      include: {
        challenge: true
      }
    });

    // Incrementar el contador de participantes en el reto
    await prisma.challenge.update({
      where: { id: parseInt(challengeId) },
      data: {
        participantes: {
          increment: 1
        }
      }
    });

    res.status(201).json({
      message: 'Te has unido al reto con éxito.',
      userChallenge: newUserChallenge
    });

  } catch (error) {
    console.error('Error al unirse al reto:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud para unirse al reto.', error: error.message });
  }
});

// Actualizar progreso de un reto (añade logs y devuelve el error exacto)
app.put('/api/challenges/progress', async (req, res) => {
  const { userId, challengeId, progreso } = req.body;

  console.log('PUT /api/challenges/progress', { userId, challengeId, progreso });

  if (userId === undefined || challengeId === undefined || progreso === undefined) {
    console.error('Faltan parámetros:', { userId, challengeId, progreso });
    return res.status(400).json({ message: 'userId, challengeId y progreso son requeridos.' });
  }
  if (parseInt(progreso) < 0 || parseInt(progreso) > 100) {
    console.error('Progreso fuera de rango:', progreso);
    return res.status(400).json({ message: 'El progreso debe estar entre 0 y 100.' });
  }

  try {
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      }
    });

    if (!userChallenge) {
      console.error('No se encontró userChallenge:', { userId, challengeId });
      return res.status(404).json({ message: 'No se encontró tu participación en este reto.' });
    }
    if (userChallenge.completado) {
      console.warn('Reto ya completado:', { userId, challengeId });
      return res.status(400).json({ message: 'Este reto ya ha sido completado.' });
    }

    let updatedUserChallenge;
    try {
      updatedUserChallenge = await prisma.userChallenge.update({
        where: {
          id: userChallenge.id
        },
        data: {
          progreso: parseInt(progreso),
          ultimoProgreso: new Date(),
          ...(parseInt(progreso) === 100 && { completado: true })
        },
        include: {
          challenge: true
        }
      });
    } catch (updateError) {
      console.error('Error en prisma.userChallenge.update:', updateError);
      return res.status(500).json({ message: 'Error en update', error: updateError.message, stack: updateError.stack });
    }

    // Asignar logros si corresponde
    await checkAndAssignAchievements(parseInt(userId));

    res.status(200).json({
      message: 'Progreso actualizado con éxito.',
      userChallenge: updatedUserChallenge
    });

  } catch (error) {
    console.error('Error general al actualizar el progreso del reto:', error);
    res.status(500).json({ message: 'Error general al actualizar el progreso del reto.', error: error.message, stack: error.stack });
  }
});

// Marcar un reto como completado (alternativa o complemento a la actualización de progreso)
app.post('/api/challenges/complete', async (req, res) => {
  const { userId, challengeId } = req.body;

  if (!userId || !challengeId) {
    return res.status(400).json({ message: 'userId y challengeId son requeridos.' });
  }

  try {
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      }
    });

    if (!userChallenge) {
      return res.status(404).json({ message: 'No se encontró tu participación en este reto.' });
    }
    if (userChallenge.completado) {
      return res.status(400).json({ message: 'Este reto ya ha sido marcado como completado.' });
    }

    const completedUserChallenge = await prisma.userChallenge.update({
      where: {
        id: userChallenge.id
      },
      data: {
        completado: true,
        progreso: 100, // Asegurar que el progreso sea 100 al completar
        ultimoProgreso: new Date()
      },
      include: {
        challenge: true
      }
    });
    res.status(200).json({
      message: 'Reto marcado como completado con éxito.',
      userChallenge: completedUserChallenge
    });
  } catch (error) {
    console.error('Error al marcar el reto como completado:', error);
    res.status(500).json({ message: 'Error al marcar el reto como completado.', error: error.message });
  }
});

// Obtener logros del usuario (corrige el campo de filtro: debe ser userId, no usuarioId)
app.get('/api/challenges/achievements/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    // Busca los logros del usuario (UserAchievement)
    const userAchievements = await prisma.userAchievement.findMany({
      where: { userId: Number(userId) }, // <-- CORREGIDO: userId, no usuarioId
      include: { achievement: true },
      orderBy: { fechaConseguido: 'desc' }
    });

    if (!userAchievements || userAchievements.length === 0) {
      return res.json([]);
    }

    const achievements = userAchievements
      .filter(ua => ua.achievement)
      .map(ua => ({
        id: ua.achievement.id,
        titulo: ua.achievement.titulo,
        descripcion: ua.achievement.descripcion,
        icono: ua.achievement.icono,
        tipo: ua.achievement.tipo,
        criterio: ua.achievement.criterio,
        valorNecesario: ua.achievement.valorNecesario,
        fechaConseguido: ua.fechaConseguido
      }));

    res.json(achievements);
  } catch (error) {
    console.error('Error al obtener logros:', error);
    res.status(500).json({ error: 'Error interno al obtener logros', detalle: error.message });
  }
});

// Lógica para asignar logros automáticamente al completar retos
async function checkAndAssignAchievements(userId) {
  // 1. Primer reto completado
  const completedCount = await prisma.userChallenge.count({
    where: { userId, completado: true }
  });
  if (completedCount >= 1) {
    const ach = await prisma.achievement.findFirst({ where: { tipo: 'primer_reto' } });
    if (ach) {
      await prisma.userAchievement.upsert({
        where: { userId_achievementId: { userId, achievementId: ach.id } },
        update: {},
        create: { userId, achievementId: ach.id }
      });
    }
  }
  // 2. Cinco retos completados
  if (completedCount >= 5) {
    const ach = await prisma.achievement.findFirst({ where: { tipo: 'cinco_retos' } });
    if (ach) {
      await prisma.userAchievement.upsert({
        where: { userId_achievementId: { userId, achievementId: ach.id } },
        update: {},
        create: { userId, achievementId: ach.id }
      });
    }
  }
  // 3. Cinco retos de una misma categoría
  const byCategory = await prisma.userChallenge.findMany({
    where: { userId, completado: true },
    include: { challenge: true }
  });
  const categoryCount = {};
  byCategory.forEach(uc => {
    const tipo = uc.challenge?.tipo || 'Otro';
    categoryCount[tipo] = (categoryCount[tipo] || 0) + 1;
  });
  for (const tipo in categoryCount) {
    if (categoryCount[tipo] >= 5) {
      const ach = await prisma.achievement.findFirst({ where: { tipo: 'cinco_categoria' } });
      if (ach) {
        await prisma.userAchievement.upsert({
          where: { userId_achievementId: { userId, achievementId: ach.id } },
          update: {},
          create: { userId, achievementId: ach.id }
        });
      }
    }
  }
}

// Endpoint para obtener información del plan de un usuario
app.get('/api/user-plan/:usuarioId', async (req, res) => {
  try {
    const usuarioId = parseInt(req.params.usuarioId);
    
    // Buscar el usuario para obtener su plan actual
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId }
    });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Calcular límites según el plan
    let limite;
    switch (usuario.plan) {
      case 'free':
        limite = 5;
        break;
      case 'basic':
        limite = 50;
        break;
      case 'premium':
        limite = Infinity;
        break;
      default:
        limite = 5; // Plan gratuito por defecto
    }

    // Contar rutinas existentes para el usuario
    const rutinasCount = await prisma.rutina.count({
      where: { usuarioId }
    });

    // Devolver la información
    res.json({
      plan: usuario.plan,
      limite,
      rutinasCreadas: rutinasCount,
      puedeCrearMas: rutinasCount < limite
    });
  } catch (error) {
    console.error('Error al obtener información del plan:', error);
    res.status(500).json({ message: 'Error al obtener información del plan' });
  }
});

// Endpoint para actualizar el plan de un usuario
app.post('/api/user-plan/update', async (req, res) => {
  try {
    const { usuarioId, newPlan } = req.body;
    
    if (!usuarioId || !newPlan) {
      return res.status(400).json({ message: 'Se requiere ID de usuario y plan nuevo' });
    }

    // Validar que el plan es válido
    const validPlans = ['free', 'basic', 'premium'];
    if (!validPlans.includes(newPlan)) {
      return res.status(400).json({ message: 'Plan no válido' });
    }

    // Actualizar plan en la base de datos
    const updatedUser = await prisma.usuario.update({
      where: { id: parseInt(usuarioId) },
      data: { plan: newPlan }
    });

    // Calcular límites según el plan
    let limite;
    switch (newPlan) {
      case 'free':
        limite = 5;
        break;
      case 'basic':
        limite = 50;
        break;
      case 'premium':
        limite = Infinity;
        break;
      default:
        limite = 5;
    }

    // Contar rutinas existentes
    const rutinasCount = await prisma.rutina.count({
      where: { usuarioId: parseInt(usuarioId) }
    });

    // Devolver la información actualizada del plan
    res.json({
      plan: updatedUser.plan,
      limite,
      rutinasCreadas: rutinasCount,
      puedeCrearMas: rutinasCount < limite
    });
  } catch (error) {
    console.error('Error al actualizar el plan del usuario:', error);
    res.status(500).json({ message: 'Error al actualizar el plan del usuario' });
  }
});

// Obtener métricas de progreso de un usuario
app.get('/api/metrics/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const metrics = await prisma.metric.findMany({
      where: { userId: Number(userId) },
      orderBy: { fecha: 'asc' }
    });
    res.json(metrics);
  } catch (error) {
    console.error('Error al obtener métricas:', error);
    res.status(500).json({ error: 'Error al obtener métricas' });
  }
});

// Añadir una nueva métrica de progreso
app.post('/api/metrics', async (req, res) => {
  const { userId, tipo, valor, fecha } = req.body;
  try {
    const metric = await prisma.metric.create({
      data: {
        userId: Number(userId),
        tipo,
        valor: Number(valor),
        fecha: new Date(fecha)
      }
    });
    res.status(201).json(metric);
  } catch (error) {
    console.error('Error al añadir métrica:', error);
    res.status(500).json({ error: 'Error al añadir métrica' });
  }
});

// Ruta para eliminar una cuenta de usuario
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id);

  try {
    // Verificar que el usuario existe
    const user = await prisma.usuario.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Guardar la URL de la foto antes de eliminar al usuario
    const fotoUrl = user.fotoUrl;

    // Eliminar todas las entidades relacionadas - esto es importante para evitar errores de restricción de clave foránea
    
    // 1. Eliminar las contrataciones del usuario
    await prisma.contratacion.deleteMany({
      where: { usuarioId: userId }
    });

    // 2. Eliminar los logros del usuario
    await prisma.userAchievement.deleteMany({
      where: { userId: userId }
    });

    // 3. Eliminar los retos del usuario
    await prisma.userChallenge.deleteMany({
      where: { userId: userId }
    });

    // 4. Eliminar las métricas del usuario
    await prisma.metric.deleteMany({
      where: { userId: userId }
    });

    // 5. Eliminar los eventos de calendario del usuario
    await prisma.calendario.deleteMany({
      where: { usuarioId: userId }
    });

    // 6. Eliminar los comentarios del usuario
    await prisma.comentario.deleteMany({
      where: { usuarioId: userId }
    });

    // 7. Eliminar las rutinas del usuario (primero eliminar las relaciones rutinaEjercicio)
    const rutinas = await prisma.rutina.findMany({
      where: { usuarioId: userId }
    });

    for (const rutina of rutinas) {
      await prisma.rutinaEjercicio.deleteMany({
        where: { rutinaId: rutina.id }
      });
    }
    
    await prisma.rutina.deleteMany({
      where: { usuarioId: userId }
    });

    // 8. Eliminar los ejercicios personalizados del usuario
    await prisma.ejercicio.deleteMany({
      where: { usuarioId: userId, esComun: false }
    });

    // 9. Finalmente, eliminar el usuario
    await prisma.usuario.delete({
      where: { id: userId }
    });
    
    // 10. Eliminar la foto de perfil del sistema de archivos si existe
    if (fotoUrl) {
      try {
        // Convertir la URL relativa a una ruta absoluta del sistema de archivos
        const filePath = path.join(__dirname, fotoUrl.replace(/^\/uploads/, 'uploads'));
        
        // Verificar si el archivo existe
        if (fs.existsSync(filePath)) {
          // Eliminar el archivo
          fs.unlinkSync(filePath);
          console.log(`Foto de perfil eliminada: ${filePath}`);
        } else {
          console.log(`No se encontró la foto de perfil: ${filePath}`);
        }
      } catch (fileError) {
        // Registrar el error pero no fallar la operación completa
        console.error('Error al eliminar la foto de perfil:', fileError);
      }
    }

    res.status(200).json({ message: 'Cuenta eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar cuenta de usuario:', error);
    res.status(500).json({ error: 'Error al eliminar la cuenta' });
  }
});

// Nueva ruta para eliminar un reto completado por un usuario - ruta corregida
app.delete('/api/challenges/delete/:userId/:challengeId', async (req, res) => {
  const { userId, challengeId } = req.params;

  try {
    // Verificar que el reto existe para ese usuario
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      },
      include: {
        challenge: true
      }
    });

    if (!userChallenge) {
      return res.status(404).json({ message: 'No se encontró el reto para este usuario.' });
    }

    // Eliminar el reto del usuario
    await prisma.userChallenge.delete({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      }
    });

    // Decrementar el contador de participantes en el reto
    // Solo si el reto sigue existiendo y es activo
    if (userChallenge.challenge && userChallenge.challenge.activo) {
      await prisma.challenge.update({
        where: { id: parseInt(challengeId) },
        data: {
          participantes: {
            decrement: 1
          }
        }
      });
    }

    res.status(200).json({ message: 'Reto eliminado con éxito.' });

  } catch (error) {
    console.error('Error al eliminar el reto:', error);
    res.status(500).json({ message: 'Error al eliminar el reto.', error: error.message });
  }
});

// Nueva ruta para abandonar un reto
app.post('/api/challenges/abandon', async (req, res) => {
  const { userId, challengeId } = req.body;

  if (!userId || !challengeId) {
    return res.status(400).json({ message: 'userId y challengeId son requeridos.' });
  }

  try {
    // Verificar que el reto existe para ese usuario
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      },
      include: {
        challenge: true // Incluimos detalles del reto para verificar si sigue activo
      }
    });

    if (!userChallenge) {
      return res.status(404).json({ message: 'No se encontró el reto para este usuario.' });
    }

    // No permitimos abandonar retos ya completados
    if (userChallenge.completado) {
      return res.status(400).json({ message: 'No puedes abandonar un reto que ya has completado.' });
    }

    // Eliminamos la participación del usuario en el reto
    await prisma.userChallenge.delete({
      where: {
        userId_challengeId: {
          userId: parseInt(userId),
          challengeId: parseInt(challengeId)
        }
      }
    });

    // Actualizamos el contador de participantes, decrementándolo en 1
    if (userChallenge.challenge && userChallenge.challenge.activo) {
      await prisma.challenge.update({
        where: { id: parseInt(challengeId) },
        data: {
          participantes: {
            decrement: 1 // Reducimos en uno el contador de participantes
          }
        }
      });
    }

    res.status(200).json({ message: 'Reto abandonado con éxito.' });

  } catch (error) {
    console.error('Error al abandonar el reto:', error);
    res.status(500).json({ message: 'Error al abandonar el reto.', error: error.message });
  }
});

// Ruta para listar todas las rutas registradas
app.get('/api/routes', (req, res) => {
  const routes = [];
  
  // Obtener todas las rutas registradas
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // Rutas directas
      const path = middleware.route.path;
      const methods = Object.keys(middleware.route.methods)
        .filter(method => middleware.route.methods[method])
        .map(method => method.toUpperCase());
      
      routes.push({
        path,
        methods,
      });
    } else if (middleware.name === 'router') {
      // Rutas agrupadas en routers
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const path = handler.route.path;
          const methods = Object.keys(handler.route.methods)
            .filter(method => handler.route.methods[method])
            .map(method => method.toUpperCase());
          
          routes.push({
            path: middleware.regexp.toString().includes('api') 
              ? `/api${path}` 
              : path,
            methods,
          });
        }
      });
    }
  });
  
  // Ordenar rutas alfabéticamente por path
  routes.sort((a, b) => a.path.localeCompare(b.path));
  
  res.json({
    totalRoutes: routes.length,
    routes
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  console.log(`URL de la aplicación: ${process.env.SERVER_URL || `http://localhost:${port}`}`);
});