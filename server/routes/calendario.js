const express = require('express');
const router = express.Router();

// Obtener eventos del calendario para un usuario específico
router.get('/:usuarioId', (req, res) => {
  try {
    const usuarioId = parseInt(req.params.usuarioId);
    console.log(`Solicitando calendario para usuario ID: ${usuarioId}`);
    
    // Simulación de datos para pruebas
    const eventosCalendario = [
      {
        id: 1,
        usuarioId: usuarioId,
        rutinaId: 1,
        rutina: { 
          id: 1,
          nombre: "Rutina de pecho",
          descripcion: "Rutina para trabajar el pecho"
        },
        fecha: new Date().toISOString()
      },
      {
        id: 2,
        usuarioId: usuarioId,
        rutinaId: 2,
        rutina: { 
          id: 2,
          nombre: "Rutina de piernas",
          descripcion: "Rutina para trabajar las piernas"
        },
        fecha: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // Mañana
      }
    ];
    
    res.json(eventosCalendario);
  } catch (error) {
    console.error('Error al obtener calendario:', error);
    res.status(500).json({ message: 'Error al obtener datos del calendario' });
  }
});

// Agregar un evento al calendario
router.post('/', (req, res) => {
  try {
    const { usuarioId, rutinaId, fecha } = req.body;
    
    if (!usuarioId || !rutinaId || !fecha) {
      return res.status(400).json({ message: 'Faltan datos requeridos' });
    }
    
    // Simulación de creación de evento
    const nuevoEvento = {
      id: Math.floor(Math.random() * 1000), // ID simulado
      usuarioId: parseInt(usuarioId),
      rutinaId: parseInt(rutinaId),
      fecha,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json(nuevoEvento);
  } catch (error) {
    console.error('Error al crear evento:', error);
    res.status(500).json({ message: 'Error al crear evento en el calendario' });
  }
});

// Eliminar un evento del calendario
router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(`Eliminando evento ID: ${id}`);
    
    // Simulación de eliminación exitosa
    res.json({ message: 'Evento eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar evento:', error);
    res.status(500).json({ message: 'Error al eliminar evento del calendario' });
  }
});

module.exports = router;
