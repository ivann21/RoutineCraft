const express = require('express');
const router = express.Router();

// Obtener información del plan de un usuario
router.get('/:userId', (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    console.log(`Obteniendo información del plan para usuario ID: ${userId}`);
    
    // Datos simulados del plan
    const planInfo = {
      userId: userId,
      plan: 'free', // Por defecto 'free', 'basic', o 'premium'
      rutinasCreadas: 5,
      limite: 10 // 10 para free, 50 para basic, Infinity para premium
    };
    
    res.json(planInfo);
  } catch (error) {
    console.error('Error al obtener información del plan:', error);
    res.status(500).json({ message: 'Error al obtener información del plan' });
  }
});

// Actualizar el plan de un usuario
// La ruta en PlansPage.jsx es '/api/update-plan', así que ajustamos aquí
// o ajustamos en PlansPage.jsx para que sea '/api/user-plan'
// Por consistencia, mantendremos la base '/api/user-plan'
router.post('/', (req, res) => {
  try {
    const { userId, newPlan } = req.body;
    
    if (!userId || !newPlan) {
      return res.status(400).json({ message: 'Faltan datos requeridos (userId, newPlan)' });
    }
    
    if (!['free', 'basic', 'premium'].includes(newPlan)) {
      return res.status(400).json({ message: 'Plan no válido' });
    }
    
    console.log(`Actualizando plan para usuario ID: ${userId} a ${newPlan}`);
    
    // Determinar el límite según el plan
    let limite;
    switch (newPlan) {
      case 'free':
        limite = 10;
        break;
      case 'basic':
        limite = 50;
        break;
      case 'premium':
        limite = Infinity; // Representa ilimitado
        break;
      default:
        limite = 10;
    }
    
    // Simulación de actualización exitosa
    const updatedPlan = {
      userId: parseInt(userId),
      plan: newPlan,
      rutinasCreadas: 5, // Este valor debería venir de la base de datos
      limite
    };
    
    res.json(updatedPlan);
  } catch (error) {
    console.error('Error al actualizar el plan:', error);
    res.status(500).json({ message: 'Error al actualizar el plan' });
  }
});

module.exports = router;
