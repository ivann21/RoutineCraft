const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.send('¡Hola, desde el servidor!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
app.get('/api/rutinas', (req, res) => {
    const rutinas = [
      { id: 1, nombre: 'Rutina Full Body' },
      { id: 2, nombre: 'Rutina Pierna' },
    ];
    res.json(rutinas);
  });
  const cors = require('cors');
  app.use(cors());
  