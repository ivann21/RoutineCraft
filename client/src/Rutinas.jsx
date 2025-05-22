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
  const [planInfo, setPlanInfo] = useState(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [rutinaToDelete, setRutinaToDelete] = useState(null);
  const [selectedRutina, setSelectedRutina] = useState(null);
  
  const openDeleteModal = (rutina) => {
    setRutinaToDelete(rutina);
    setShowDeleteModal(true);
  };

  const handleDeleteRutina = async () => {
    try {
      await axios.delete(`/api/rutinas/${rutinaToDelete.id}`);
      setRutinas(rutinas.filter((rutina) => rutina.id !== rutinaToDelete.id));
      
      // Update plan info after deletion to reflect the new count
      const usuarioId = localStorage.getItem('usuarioId');
      const planResponse = await axios.get(`/api/user-plan/${usuarioId}`);
      setPlanInfo(planResponse.data);
      
      setShowDeleteModal(false);
      setRutinaToDelete(null);
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

          // Fetch plan information
          const planResponse = await axios.get(`/api/user-plan/${usuarioId}`);
          setPlanInfo(planResponse.data);
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

  const handleAddRutinaClick = () => {
    if (planInfo && !planInfo.puedeCrearMas) {
      setShowLimitModal(true);
    } else {
      navigate('/add-rutina');
    }
  };

  const handleViewDetails = (rutina) => {
    setSelectedRutina(rutina);
  };
  
  const closeDetails = () => {
    setSelectedRutina(null);
  };

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
        
        {!selectedRutina && (
          <div className="text-center mb-6">
            <button
              onClick={handleAddRutinaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all"
            >
              Añadir Rutina
            </button>
            {planInfo && (
              <p className="text-sm text-gray-300 mt-2">
                {planInfo.rutinasCreadas} de {planInfo.limite === Infinity ? '∞' : planInfo.limite} rutinas
              </p>
            )}
          </div>
        )}
        
        {/* Rutina Details View */}
        {selectedRutina ? (
          <div className="bg-gray-800 rounded-lg p-6 mb-8 animate-fadeIn">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedRutina.nombre}</h2>
              <button 
                onClick={closeDetails}
                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Descripción</h3>
              <p className="text-gray-300">{selectedRutina.descripcion || "Sin descripción"}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Ejercicios</h3>
              {selectedRutina.ejercicios && selectedRutina.ejercicios.length > 0 ? (
                <div className="bg-gray-700 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="py-2 px-4 text-left text-gray-200">Nombre</th>
                        <th className="py-2 px-4 text-left text-gray-200">Series</th>
                        <th className="py-2 px-4 text-left text-gray-200">Repeticiones</th>
                        <th className="py-2 px-4 text-left text-gray-200">Descanso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRutina.ejercicios.map((ej) => (
                        <tr key={ej.id} className="border-t border-gray-700">
                          <td className="py-2 px-4 text-gray-300">{ej.ejercicio?.nombre || "Ejercicio"}</td>
                          <td className="py-2 px-4 text-gray-300">{ej.series}</td>
                          <td className="py-2 px-4 text-gray-300">{ej.repeticiones}</td>
                          <td className="py-2 px-4 text-gray-300">{ej.descansoSegundos}s</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-400">No hay ejercicios en esta rutina.</p>
              )}
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => navigate(`/edit-rutina/${selectedRutina.id}`)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  openDeleteModal(selectedRutina);
                  closeDetails();
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <>
            {rutinas.length === 0 ? (
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">No tienes rutinas aún. ¡Empieza a crear una!</p>
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rutinas.map((rutina) => (
                  <li
                    key={rutina.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h2 className="text-xl font-semibold text-white">{rutina.nombre}</h2>
                    <p className="text-gray-400 mt-2 line-clamp-2">{rutina.descripcion || "Sin descripción"}</p>
                    
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => handleViewDetails(rutina)}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md"
                      >
                        Ver detalles
                      </button>
                      <button
                        onClick={() => navigate(`/edit-rutina/${rutina.id}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => openDeleteModal(rutina)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {/* Plan Limit Modal */}
        {showLimitModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Límite de rutinas alcanzado</h3>
              <p className="text-gray-300 mb-6">
                Has alcanzado el límite de {planInfo.limite} rutinas de tu plan {planInfo.plan.toUpperCase()}.
                Para crear más rutinas, actualiza tu plan a uno de nivel superior.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => navigate('/planes')}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Ver planes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && rutinaToDelete && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Confirmar eliminación</h3>
              <p className="text-gray-300 mb-6">
                ¿Estás seguro de que quieres eliminar la rutina <span className="font-semibold text-white">{rutinaToDelete.nombre}</span>? Esta acción no se puede deshacer.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteRutina}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rutinas;
