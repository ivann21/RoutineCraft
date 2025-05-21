const http = require('http');
const { exec } = require('child_process');

// Verifica si el servidor está en ejecución y si la ruta de la API está disponible
function checkServerAndApi() {
  console.log('Verificando el servidor y la API de retos...');
  
  // Verificar si el servidor está en ejecución
  const req = http.request({
    host: 'localhost',
    port: 5000,
    path: '/api/challenges/active',
    method: 'GET'
  }, (res) => {
    console.log(`Servidor respondiendo con estado: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✅ API de retos funcionando correctamente');
    } else {
      console.log(`❌ La API respondió con código de estado ${res.statusCode}`);
      restartServer();
    }
    
    // Leer los datos de respuesta
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(data);
        console.log('Respuesta de la API:', parsedData);
      } catch (e) {
        console.log('Respuesta no es JSON válido:', data);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Error al conectar con el servidor:', error.message);
    restartServer();
  });
  
  req.end();
}

function restartServer() {
  console.log('Intentando reiniciar el servidor...');
  
  exec('cd ../server && npm run start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al reiniciar el servidor: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error en el servidor: ${stderr}`);
      return;
    }
    console.log(`Servidor reiniciado: ${stdout}`);
  });
}

checkServerAndApi();
