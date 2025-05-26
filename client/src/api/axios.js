import axios from 'axios';

// Determinar la URL base según el entorno
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:5000' 
  : 'https://routinecraft-api.onrender.com';

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

export default axiosInstance;
