const mongoose = require('mongoose');

const userChallengeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia a tu modelo de usuario existente
    required: true
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true
  },
  progreso: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  completado: {
    type: Boolean,
    default: false
  },
  fechaInicio: {
    type: Date,
    default: Date.now
  },
  ultimoProgreso: {
    type: Date,
    default: Date.now
  }
});

// Índice compuesto para evitar duplicados
userChallengeSchema.index({ userId: 1, challengeId: 1 }, { unique: true });

module.exports = mongoose.model('UserChallenge', userChallengeSchema);
