const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Habilitar CORS para peticiones desde el cliente
app.use(cors());
app.use(express.json());

// Importar rutas
const challengesRouter = require('./routes/challenges');
const calendarioRouter = require('./routes/calendario');
const userPlanRouter = require('./routes/user-plan'); // Asegúrate de que este archivo exista

// Registrar rutas
app.use('/api/challenges', challengesRouter);
app.use('/api/calendario', calendarioRouter);
app.use('/api/user-plan', userPlanRouter); // Registrar las rutas del plan de usuario

// Ruta principal para verificar que el servidor está en funcionamiento
app.get('/', (req, res) => {
  res.send('Servidor de verificación de RoutineCraft funcionando correctamente');
});

// Middleware para mostrar rutas no encontradas
app.use((req, res, next) => {
  console.log(`Ruta no encontrada: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Ruta no encontrada', path: req.originalUrl });
});

// Iniciar el servidor para pruebas
app.listen(PORT, () => {
  console.log(`Servidor de verificación ejecutándose en http://localhost:${PORT}`);
  console.log('\nRutas disponibles:');
  console.log('- GET /api/challenges/test');
  console.log('- GET /api/challenges/active');
  console.log('- GET /api/challenges/user');
  console.log('- GET /api/challenges/completed');
  console.log('- GET /api/challenges/achievements');
  console.log('- GET /api/calendario/:usuarioId');
  console.log('- POST /api/calendario');
  console.log('- DELETE /api/calendario/:id');
  console.log('- GET /api/user-plan/:userId'); // Añadir ruta de plan de usuario
  console.log('- POST /api/user-plan'); // Añadir ruta de plan de usuario
  console.log('\nPara probar, abre en tu navegador:');
  console.log(`http://localhost:${PORT}/api/challenges/test`);
  console.log(`http://localhost:${PORT}/api/challenges/active`);
  console.log(`http://localhost:${PORT}/api/calendario/3`);
  console.log(`http://localhost:${PORT}/api/user-plan/1`); // Ejemplo de ruta de plan
});
