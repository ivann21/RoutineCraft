import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RoutineCraft/',
  build: {
    outDir: 'dist', 
    emptyOutDir: true, 
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://routinecraft.onrender.com', 
        changeOrigin: true,
        secure: false, 
      },
    },
  },
});