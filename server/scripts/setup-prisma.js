const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Configurando Prisma Client...');

// Verificar si el archivo schema.prisma existe
const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
if (!fs.existsSync(schemaPath)) {
  console.error('Error: No se encontró el archivo schema.prisma en la ruta:', schemaPath);
  process.exit(1);
}

try {
  console.log('Generando cliente Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('Cliente Prisma generado correctamente.');
  
  // Verificar que se haya creado el directorio de cliente
  const clientPath = path.join(__dirname, '..', 'prisma', 'generated', 'client');
  if (fs.existsSync(clientPath)) {
    console.log('Directorio del cliente verificado:', clientPath);
  } else {
    console.warn('Advertencia: El directorio del cliente no se encontró en la ubicación esperada.');
  }
  
  console.log('\nAhora puedes ejecutar el servidor con:');
  console.log('npm run start');
  
} catch (error) {
  console.error('Error al generar el cliente Prisma:', error.message);
  console.error('Por favor, verifica la configuración de Prisma.');
  process.exit(1);
}
