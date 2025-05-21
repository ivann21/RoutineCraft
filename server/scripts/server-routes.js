const express = require('express');
const app = express();

// Importar las rutas sin inicializar Prisma
try {
  const challengesRouter = require('../routes/challenges');

  // Registrar las rutas
  app.use('/api/challenges', challengesRouter);

  // Listar todas las rutas registradas
  console.log('Rutas disponibles en el servidor:');
  console.log('---------------------------------');

  // Función recursiva para imprimir todas las rutas
  function printRoutes(stack, basePath = '') {
    stack.forEach(r => {
      if (r.route && r.route.path) {
        const methods = Object.keys(r.route.methods)
          .filter(method => r.route.methods[method])
          .join(', ').toUpperCase();
        
        console.log(`${methods} ${basePath}${r.route.path}`);
      } else if (r.handle && r.handle.stack) {
        // Esta es una instancia de Router
        const newBase = basePath + (r.regexp ? r.regexp.toString().replace('/^', '').replace('/(?=\\/|$)/i', '').replace(/\\\//g, '/') : '');
        printRoutes(r.handle.stack, newBase);
      }
    });
  }

  printRoutes(app._router.stack);
  console.log('---------------------------------');
  console.log('Para probar estas rutas, asegúrate de que el servidor esté en ejecución y usa:');
  console.log('curl http://localhost:5000/api/challenges/active');
} catch (error) {
  console.error('Error al cargar las rutas:', error.message);
  console.log('\nPara resolver este problema:');
  console.log('1. Ejecuta: node server/scripts/setup-prisma.js');
  console.log('2. Inicia el servidor: npm run start');
}
