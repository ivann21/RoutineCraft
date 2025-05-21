const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  icono: {
    type: String,
    required: true
  },
  criterio: {
    type: String,
    required: true
  },
  valorNecesario: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Achievement', achievementSchema);
