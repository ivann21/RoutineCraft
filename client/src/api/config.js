// Archivo de configuración para la API

// Determinar si estamos en desarrollo o producción
const isDevelopment = import.meta.env.DEV;

// Configurar la URL base de la API según el entorno
const API_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://routinecraft-api.onrender.com';

// Exportar la configuración para Axios
export const apiConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Importante para enviar cookies en solicitudes cross-origin
};

// Exportar la URL base para uso directo
export const getApiUrl = () => API_URL;
