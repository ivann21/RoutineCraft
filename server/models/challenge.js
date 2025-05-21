const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    required: true
  },
  participantes: {
    type: Number,
    default: 0
  },
  nivel: {
    type: String,
    enum: ['Principiante', 'Intermedio', 'Avanzado', 'Todos los niveles'],
    required: true
  },
  tipo: {
    type: String,
    enum: ['Fuerza', 'Cardio', 'Flexibilidad', 'Resistencia', 'Equilibrio'],
    required: true
  },
  objetivos: [{
    type: String
  }],
  recompensa: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Challenge', challengeSchema);
