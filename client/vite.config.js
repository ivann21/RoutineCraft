import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// URL de la API en Render (definida directamente)
const API_URL = 'https://routinecraft-api.onrender.com';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    // Definir variable global para la URL de la API
    '__API_URL__': JSON.stringify(API_URL)
  },
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  }
});