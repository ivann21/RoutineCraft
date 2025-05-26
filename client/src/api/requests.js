import axios from 'axios';
import { API_CONFIG } from './config';

// Crear instancia de axios con la configuración
const api = axios.create(API_CONFIG);

// Interceptores y otras configuraciones aquí

// Exportar funciones de API
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar:", error);
    throw error;
  }
};

// ... resto de funciones de API
