const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los retos activos - con mejor depuración
exports.getActiveChallenges = async (req, res) => {
  try {
    console.log('Recibida solicitud de retos activos');
    const currentDate = new Date();
    
    // Consulta de depuración - contar primero
    const challengeCount = await prisma.challenge.count({
      where: {
        activo: true,
        fechaFin: {
          gte: currentDate
        }
      }
    });
    
    console.log(`Se encontraron ${challengeCount} retos activos en la base de datos`);
    
    // Si hay retos, obtenerlos
    if (challengeCount > 0) {
      const challenges = await prisma.challenge.findMany({
        where: {
          activo: true,
          fechaFin: {
            gte: currentDate
          }
        }
      });
      
      console.log('Enviando retos al cliente:', challenges.length);
      return res.json(challenges);
    } else {
      console.log('No se encontraron retos activos');
      return res.json([]);
    }
  } catch (error) {
    console.error('Error al obtener retos activos:', error);
    return res.status(500).json({ 
      message: 'Error al obtener retos',
      error: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
    });
  }
};

// Obtener retos del usuario actual
exports.getUserChallenges = async (req, res) => {
  try {
    const userId = parseInt(req.user.id); // Convertir a entero si es necesario
    
    const userChallenges = await prisma.userChallenge.findMany({
      where: {
        userId: userId,
        completado: false
      },
      include: {
        challenge: true
      }
    });
    
    // Formatear la respuesta
    const formattedChallenges = userChallenges.map(uc => ({
      id: uc.challengeId,
      titulo: uc.challenge.titulo,
      descripcion: uc.challenge.descripcion,
      fechaFin: uc.challenge.fechaFin,
      tipo: uc.challenge.tipo,
      nivel: uc.challenge.nivel,
      progreso: uc.progreso
    }));
    
    res.json(formattedChallenges);
  } catch (error) {
    console.error('Error al obtener retos del usuario:', error);
    res.status(500).json({ message: 'Error al obtener tus retos' });
  }
};

// Obtener retos completados por el usuario
exports.getCompletedChallenges = async (req, res) => {
  try {
    const userId = parseInt(req.user.id); // Convertir a entero si es necesario
    
    const userChallenges = await prisma.userChallenge.findMany({
      where: {
        userId: userId,
        completado: true
      },
      include: {
        challenge: true
      }
    });
    
    // Formatear la respuesta
    const formattedChallenges = userChallenges.map(uc => ({
      id: uc.challengeId,
      titulo: uc.challenge.titulo,
      descripcion: uc.challenge.descripcion,
      fechaFin: uc.challenge.fechaFin,
      tipo: uc.challenge.tipo,
      nivel: uc.challenge.nivel,
      fechaCompletado: uc.ultimoProgreso
    }));
    
    res.json(formattedChallenges);
  } catch (error) {
    console.error('Error al obtener retos completados:', error);
    res.status(500).json({ message: 'Error al obtener retos completados' });
  }
};

// Unirse a un reto
exports.joinChallenge = async (req, res) => {
  try {
    const userId = parseInt(req.user.id); // Convertir a entero si es necesario
    const challengeId = parseInt(req.body.challengeId);
    
    // Verificar que el reto existe y está activo
    const currentDate = new Date();
    const challenge = await prisma.challenge.findFirst({
      where: {
        id: challengeId,
        activo: true,
        fechaFin: {
          gte: currentDate
        }
      }
    });
    
    if (!challenge) {
      return res.status(404).json({ message: 'Reto no encontrado o no disponible' });
    }
    
    // Verificar si el usuario ya está en este reto
    const existingUserChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: userId,
          challengeId: challengeId
        }
      }
    });
    
    if (existingUserChallenge) {
      return res.status(400).json({ message: 'Ya estás participando en este reto' });
    }
    
    // Crear nueva participación en una transacción
    await prisma.$transaction([
      // Crear registro de participación
      prisma.userChallenge.create({
        data: {
          userId: userId,
          challengeId: challengeId
        }
      }),
      // Incrementar contador de participantes
      prisma.challenge.update({
        where: { id: challengeId },
        data: { participantes: { increment: 1 } }
      })
    ]);
    
    res.status(201).json({ message: 'Te has unido al reto con éxito' });
  } catch (error) {
    console.error('Error al unirse al reto:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};

// Actualizar progreso de un reto
exports.updateProgress = async (req, res) => {
  try {
    const userId = parseInt(req.user.id); // Convertir a entero si es necesario
    const challengeId = parseInt(req.body.challengeId);
    const progreso = parseInt(req.body.progreso);
    
    if (progreso < 0 || progreso > 100) {
      return res.status(400).json({ message: 'El progreso debe estar entre 0 y 100' });
    }
    
    // Verificar que el usuario está participando en este reto
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: userId,
          challengeId: challengeId
        }
      }
    });
    
    if (!userChallenge) {
      return res.status(404).json({ message: 'No estás participando en este reto' });
    }
    
    // Actualizar progreso
    await prisma.userChallenge.update({
      where: {
        userId_challengeId: {
          userId: userId,
          challengeId: challengeId
        }
      },
      data: {
        progreso: progreso,
        ultimoProgreso: new Date(),
        completado: progreso === 100
      }
    });
    
    // Si completó el reto, verificar logros
    if (progreso === 100) {
      await checkAchievements(userId);
    }
    
    res.json({ message: 'Progreso actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar progreso:', error);
    res.status(500).json({ message: 'Error al actualizar progreso' });
  }
};

// Obtener logros del usuario
exports.getUserAchievements = async (req, res) => {
  try {
    const userId = parseInt(req.user.id); // Convertir a entero si es necesario
    
    const userAchievements = await prisma.userAchievement.findMany({
      where: {
        userId: userId
      },
      include: {
        achievement: true
      }
    });
    
    // Formatear respuesta
    const formattedAchievements = userAchievements.map(ua => ({
      id: ua.achievementId,
      titulo: ua.achievement.titulo,
      descripcion: ua.achievement.descripcion,
      tipo: ua.achievement.tipo,
      icono: ua.achievement.icono,
      fechaConseguido: ua.fechaConseguido
    }));
    
    res.json(formattedAchievements);
  } catch (error) {
    console.error('Error al obtener logros del usuario:', error);
    res.status(500).json({ message: 'Error al obtener tus logros' });
  }
};

// Función auxiliar para verificar logros
async function checkAchievements(userId) {
  try {
    // Contar retos completados por el usuario
    const completedChallengesCount = await prisma.userChallenge.count({
      where: {
        userId: userId,
        completado: true
      }
    });
    
    // Buscar logros relacionados con completar retos
    const challengeAchievements = await prisma.achievement.findMany({
      where: {
        criterio: 'retos_completados',
        valorNecesario: {
          lte: completedChallengesCount
        }
      }
    });
    
    // Otorgar nuevos logros
    for (const achievement of challengeAchievements) {
      const existingUserAchievement = await prisma.userAchievement.findUnique({
        where: {
          userId_achievementId: {
            userId: userId,
            achievementId: achievement.id
          }
        }
      });
      
      if (!existingUserAchievement) {
        await prisma.userAchievement.create({
          data: {
            userId: userId,
            achievementId: achievement.id
          }
        });
      }
    }
  } catch (error) {
    console.error('Error al verificar logros:', error);
  }
}
