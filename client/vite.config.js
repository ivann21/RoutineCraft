import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// URL de la API en Render (definida directamente aquí)
const API_URL = 'https://routinecraft-api.onrender.com';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que la base sea la raíz
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020', // Asegura compatibilidad
    },
  },
  // Define variables globales accesibles en el código cliente
  define: {
    // Define explícitamente la URL de la API como una variable global
    '__API_URL__': JSON.stringify(API_URL),
  },
  build: {
    // Configuración para el build
    outDir: 'dist',
    assetsDir: 'assets',
    // Asegurar que las rutas sean relativas a la raíz
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    // Configuración para desarrollo local
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});