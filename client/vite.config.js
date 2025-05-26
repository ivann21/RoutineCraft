import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// URL de la API - definido directamente sin depender de variables de entorno
// Usamos una URL fija para cada entorno para evitar errores
const PROD_API_URL = 'https://routinecraft-api.onrender.com';
const DEV_API_URL = 'http://localhost:5000';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Determinar si estamos en desarrollo o producción
  const isProd = command === 'build';
  const API_URL = isProd ? PROD_API_URL : DEV_API_URL;
  
  return {
    plugins: [react()],
    base: '/',
    define: {
      // Definir variable global para la URL de la API
      '__API_URL__': JSON.stringify(API_URL),
      // Añadir una variable para identificar el entorno
      '__IS_DEV__': JSON.stringify(!isProd)
    },
    server: {
      proxy: {
        '/api': {
          target: DEV_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    }
  };
});