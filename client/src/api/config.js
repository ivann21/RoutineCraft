// Archivo de configuración para la API

// Usar la URL de la API de producción en Render si está disponible, de lo contrario usar desarrollo local
const API_URL = import.meta.env.VITE_API_URL || 'https://routinecraft.onrender.com';

// Configuración para Axios
export const API_CONFIG = {
  baseURL: API_URL,
  timeout: 10000, // 10 segundos de timeout
  headers: {
    'Content-Type': 'application/json',
  }
};

// URL de la API para uso directo en componentes
export const getApiUrl = () => API_URL;
