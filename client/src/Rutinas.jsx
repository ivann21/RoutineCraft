
import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import { useNavigate } from 'react-router-dom';
import RestTimer from './components/RestTimer';

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
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 
  
  const openDeleteModal = (rutina) => {
    setRutinaToDelete(rutina);
    setShowDeleteModal(true);
  };

  const handleDeleteRutina = async () => {
    try {
      await axios.delete(`/api/rutinas/${rutinaToDelete.id}`);
      setRutinas(rutinas.filter((rutina) => rutina.id !== rutinaToDelete.id));
      
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
    // Verificar autenticación al cargar el componente y en cada cambio de almacenamiento
    const checkAuth = () => {
      const userId = localStorage.getItem('usuarioId');
      setIsLoggedIn(!!userId);
      
      if (!userId) {
        // Si no hay ID de usuario, limpiar cualquier dato relacionado con las rutinas
        setRutinas([]);
        setPlanInfo(null);
        setSelectedRutina(null);
        setSelectedExercise(null);
      }
    };
    
    // Verificar al montar el componente
    checkAuth();
    
    // Escuchar cambios en localStorage (como logout)
    const handleStorageChange = () => {
      checkAuth();
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

          const planResponse = await axios.get(`/api/user-plan/${usuarioId}`);
          setPlanInfo(planResponse.data);
          
          const rutinaIdToView = localStorage.getItem('viewRutinaDetails');
          if (rutinaIdToView) {
            localStorage.removeItem('viewRutinaDetails');
            const rutina = response.data.find(r => r.id === parseInt(rutinaIdToView));
            if (rutina) {
              setSelectedRutina(rutina);
            }
          }
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

  // Función para filtrar rutinas por término de búsqueda
  const rutinasFiltradas = () => {
    if (!searchTerm.trim()) {
      return rutinas;
    }
    
    const termLower = searchTerm.toLowerCase().trim();
    return rutinas.filter(rutina => 
      rutina.nombre.toLowerCase().includes(termLower) ||
      (rutina.descripcion && rutina.descripcion.toLowerCase().includes(termLower)) ||
      (rutina.ejercicios && rutina.ejercicios.some(ej => 
        ej.ejercicio && ej.ejercicio.nombre.toLowerCase().includes(termLower)
      ))
    );
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

  if (loading) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto flex items-center justify-center min-h-screen">
          <div className="text-center">
            <svg className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-xl text-blue-400 font-medium">Cargando tus rutinas...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Mis Rutinas de Entrenamiento</h1>
        
        {!selectedRutina && (
          <>
            <div className="text-center mb-4">
              <button
                onClick={handleAddRutinaClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md shadow-md transition-all flex items-center mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Añadir Rutina
              </button>
              {planInfo && planInfo.plan !== 'premium' && (
                <p className="text-sm text-gray-300 mt-2">
                  {planInfo.rutinasCreadas} de {planInfo.limite} rutinas utilizadas
                </p>
              )}
            </div>

            {/* Búsqueda de rutinas */}
            {rutinas.length > 0 && (
              <div className="max-w-lg mx-auto mb-8 mt-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Buscar rutinas por nombre, descripción o ejercicios..."
                    className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none shadow-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="text-gray-400 hover:text-white"
                        type="button"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Rutina Details View */}
        {selectedRutina ? (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedRutina.nombre}</h2>
              <button 
                onClick={closeDetails}
                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="mb-8 bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Descripción
              </h3>
              <p className="text-gray-300">{selectedRutina.descripcion || "Sin descripción"}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ejercicios
              </h3>
              {selectedRutina.ejercicios && selectedRutina.ejercicios.length > 0 ? (
                <>
                  <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-600">
                          <th className="py-3 px-4 text-left text-gray-200 font-semibold">Nombre</th>
                          <th className="py-3 px-4 text-left text-gray-200 font-semibold">Series</th>
                          <th className="py-3 px-4 text-left text-gray-200 font-semibold">Repeticiones</th>
                          <th className="py-3 px-4 text-left text-gray-200 font-semibold">Descanso</th>
                          <th className="py-3 px-4 text-left text-gray-200 font-semibold">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedRutina.ejercicios.map((ej, index) => (
                          <tr 
                            key={ej.id} 
                            className={`border-t border-gray-700 hover:bg-gray-700/80 transition-colors ${index % 2 === 0 ? 'bg-gray-700/30' : ''}`}
                          >
                            <td className="py-3 px-4 text-gray-300 font-medium">{ej.ejercicio?.nombre || "Ejercicio"}</td>
                            <td className="py-3 px-4 text-gray-300">{ej.series}</td>
                            <td className="py-3 px-4 text-gray-300">{ej.repeticiones}</td>
                            <td className="py-3 px-4 text-gray-300">{ej.descansoSegundos}s</td>
                            <td className="py-3 px-4">
                              <button 
                                onClick={() => setSelectedExercise(ej)}
                                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded shadow-sm transition-colors flex items-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Temporizador
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {selectedExercise && (
                    <div className="mt-8 bg-gray-700/50 rounded-lg p-5 shadow-lg animate-fadeIn">
                      <h4 className="text-lg text-white mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Temporizador para <span className="font-medium ml-1 text-blue-400">{selectedExercise.ejercicio?.nombre}</span>
                      </h4>
                      <RestTimer 
                        initialSeconds={selectedExercise.descansoSegundos}
                        onClose={() => setSelectedExercise(null)}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center p-8 bg-gray-700/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-gray-400 text-lg">No hay ejercicios en esta rutina.</p>
                  <p className="text-gray-500 mt-2">Puedes editar la rutina para añadir ejercicios.</p>
                </div>
              )}
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => navigate(`/edit-rutina/${selectedRutina.id}`)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md shadow-md transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Rutina
              </button>
              <button
                onClick={() => {
                  openDeleteModal(selectedRutina);
                  closeDetails();
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md shadow-md transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar Rutina
              </button>
            </div>
          </div>
        ) : (
          <>
            {rutinasFiltradas().length === 0 ? (
              <div className="text-center bg-gray-800 rounded-lg p-10 max-w-xl mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {searchTerm ? 'No se encontraron rutinas' : 'Aún no tienes rutinas'}
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  {searchTerm ? 
                    `No hay rutinas que coincidan con "${searchTerm}"` : 
                    '¡Crea tu primera rutina de entrenamiento para comenzar!'}
                </p>
                {!searchTerm && (
                  <button
                    onClick={handleAddRutinaClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition-all inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Crear mi primera rutina
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rutinasFiltradas().map((rutina) => (
                  <div
                    key={rutina.id}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="p-5">
                      <h2 className="text-2xl font-bold text-white mb-2 line-clamp-1">{rutina.nombre}</h2>
                      <p className="text-gray-400 mb-4 line-clamp-2 h-12">{rutina.descripcion || "Sin descripción"}</p>
                      
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {rutina.ejercicios?.length || 0} {rutina.ejercicios?.length === 1 ? 'ejercicio' : 'ejercicios'}
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 p-4 flex justify-between">
                      <button
                        onClick={() => handleViewDetails(rutina)}
                        className="flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-md flex-1 mr-2 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver
                      </button>
                      <button
                        onClick={() => navigate(`/edit-rutina/${rutina.id}`)}
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex-1 mr-2 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Editar
                      </button>
                      <button
                        onClick={() => openDeleteModal(rutina)}
                        className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md flex-1 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        
        {/* Plan Limit Modal */}
        {showLimitModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all">
              <div className="text-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">Límite de rutinas alcanzado</h3>
                <p className="text-gray-300">
                  Has alcanzado el límite de {planInfo.limite} rutinas de tu plan <span className="font-semibold uppercase">{planInfo.plan}</span>.
                  Para crear más rutinas, actualiza tu plan a uno de nivel superior.
                </p>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => navigate('/planes')}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Mejorar plan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && rutinaToDelete && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all">
              <div className="text-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">Confirmar eliminación</h3>
                <p className="text-gray-300">
                  ¿Estás seguro de que quieres eliminar la rutina <span className="font-semibold text-white">{rutinaToDelete.nombre}</span>? 
                </p>
                <p className="text-red-400 text-sm mt-2">Esta acción no se puede deshacer.</p>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteRutina}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
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
