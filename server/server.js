const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, desde el servidor!');
});

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

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
