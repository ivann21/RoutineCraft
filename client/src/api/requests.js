import axios from 'axios';
import { apiConfig } from './config';

// Crear instancia de axios con la configuración
const api = axios.create(apiConfig);

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Función para registrar un usuario
export const register = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error al registrar:', error);
    throw error;
  }
};

// ...resto de funciones de API
