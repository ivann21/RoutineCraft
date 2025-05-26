import axios from 'axios';

// Determinar la URL base según el entorno
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:5000' 
  : 'https://routinecraft-api.onrender.com';

console.log('API URL configurada:', API_URL);

// Crear y configurar instancia de axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Configuración global de axios (para componentes que usan axios importado directamente)
axios.defaults.baseURL = API_URL;

// Agregar interceptores para debugging
axiosInstance.interceptors.request.use(
  config => {
    console.log(`Petición enviada a ${config.url}`, config);
    return config;
  }, 
  error => {
    console.error('Error en la petición:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
