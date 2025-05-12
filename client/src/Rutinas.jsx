// src/Rutinas.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

const Rutinas = () => {
  const navigate = useNavigate();
  const [rutinas, setRutinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));

  const handleDeleteRutina = async (id) => {
    try {
      await axios.delete(`/api/rutinas/${id}`);
      setRutinas(rutinas.filter((rutina) => rutina.id !== id));
      alert('Rutina eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la rutina:', error);
      alert('Hubo un error al eliminar la rutina');
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('usuarioId'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchRutinas = async () => {
        try {
          const usuarioId = localStorage.getItem('usuarioId');
          const response = await axios.get(`/api/rutinas/${usuarioId}`);
          setRutinas(response.data);
        } catch (error) {
          console.error('Error al obtener las rutinas:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchRutinas();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para acceder a tus rutinas.</p>
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    );
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Mis Rutinas</h1>
        <div className="text-center mb-6">
          <button
            onClick={() => navigate('/add-rutina')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all"
          >
            Añadir Rutina
          </button>
        </div>
        {rutinas.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">No tienes rutinas aún. ¡Empieza a crear una!</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rutinas.map((rutina) => (
              <li
                key={rutina.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-white">{rutina.nombre}</h2>
                <p className="text-gray-400 mt-2">{rutina.descripcion || "Sin descripción"}</p>
                <button
                  onClick={() => navigate(`/edit-rutina/${rutina.id}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteRutina(rutina.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-2 ml-2"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Rutinas;
