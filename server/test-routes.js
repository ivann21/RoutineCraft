const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001; // Puerto diferente al servidor principal para pruebas

// Habilitar CORS para pruebas
app.use(cors());

// Importar las rutas de retos
const challengesRoutes = require('./routes/challenges');

// Usar las rutas
app.use('/api/challenges', challengesRoutes);

// Ruta de prueba básica
app.get('/', (req, res) => {
  res.send('Servidor de prueba para RoutineCraft API');
});

// Iniciar servidor de prueba
app.listen(port, () => {
  console.log(`Servidor de prueba ejecutándose en http://localhost:${port}`);
  console.log('Rutas disponibles:');
  console.log(`- GET http://localhost:${port}/api/challenges/test`);
  console.log(`- GET http://localhost:${port}/api/challenges/active`);
  console.log(`- GET http://localhost:${port}/api/challenges/user`);
  console.log(`- GET http://localhost:${port}/api/challenges/completed`);
  console.log(`- GET http://localhost:${port}/api/challenges/achievements`);
  console.log(`- POST http://localhost:${port}/api/challenges/join`);
  console.log(`- PUT http://localhost:${port}/api/challenges/progress`);
});
