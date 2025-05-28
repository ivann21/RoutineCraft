import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEjercicio from './AddEjercicio';
import EditEjercicio from './EditEjercicio';

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));
  const [ejercicioEditando, setEjercicioEditando] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [ejercicioToDelete, setEjercicioToDelete] = useState(null);
  const [deleteError, setDeleteError] = useState('');
  const [selectedEjercicio, setSelectedEjercicio] = useState(null);
  const [ejerciciosComunes, setEjerciciosComunes] = useState([]);
  const [ejerciciosPersonalizados, setEjerciciosPersonalizados] = useState([]);
  const [tipoFiltro, setTipoFiltro] = useState('todos'); 
  const [searchTerm, setSearchTerm] = useState(''); 

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
      const fetchEjercicios = async () => {
        try {
          const usuarioId = localStorage.getItem('usuarioId');
          const response = await axios.get(`/api/ejercicios?usuarioId=${usuarioId}`);
          
          const comunes = response.data.filter(e => e.esComun);
          const personalizados = response.data.filter(e => !e.esComun);
          
          setEjerciciosComunes(comunes);
          setEjerciciosPersonalizados(personalizados);
          setEjercicios(response.data); 
        } catch (error) {
          console.error('Error al obtener los ejercicios:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchEjercicios();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);
  
  const ejerciciosFiltrados = () => {
    let resultado = [];
    
    switch (tipoFiltro) {
      case 'comunes':
        resultado = ejerciciosComunes || [];
        break;
      case 'personalizados':
        resultado = ejerciciosPersonalizados || [];
        break;
      default:
        resultado = ejercicios || [];
    }
    
    if (searchTerm.trim() !== '') {
      const termLower = searchTerm.toLowerCase().trim();
      resultado = resultado.filter(e => 
        e.nombre.toLowerCase().includes(termLower) || 
        (e.categoria && e.categoria.toLowerCase().includes(termLower)) ||
        (e.descripcion && e.descripcion.toLowerCase().includes(termLower))
      );
    }
    
    return resultado;
  };

  const handleEditEjercicio = (ejercicio) => {
    setEjercicioEditando(ejercicio);
  };

  const openDeleteModal = (ejercicio) => {
    setEjercicioToDelete(ejercicio);
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const handleDeleteEjercicio = async () => {
    try {
      await axios.delete(`/api/ejercicios/${ejercicioToDelete.id}`);
      
      const filteredEjercicios = ejercicios.filter(ej => ej.id !== ejercicioToDelete.id);
      setEjercicios(filteredEjercicios);
      
      if (ejercicioToDelete.esComun) {
        setEjerciciosComunes(ejerciciosComunes.filter(ej => ej.id !== ejercicioToDelete.id));
      } else {
        setEjerciciosPersonalizados(ejerciciosPersonalizados.filter(ej => ej.id !== ejercicioToDelete.id));
      }
      
      setShowDeleteModal(false);
      setEjercicioToDelete(null);
    } catch (error) {
      console.error('Error al eliminar el ejercicio:', error);
      if (error.response && error.response.status === 409) {
        setDeleteError("Este ejercicio está siendo usado en una o más rutinas y no puede ser eliminado.");
      } else {
        setDeleteError("Error al eliminar el ejercicio. Inténtalo de nuevo.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEjercicioEditando(null);
  };

  const handleViewDetails = (ejercicio) => {
    setSelectedEjercicio(ejercicio);
  };

  const closeDetails = () => {
    setSelectedEjercicio(null);
  };

  const handleAddSuccess = (newEjercicio) => {
    if (newEjercicio.esComun) {
      setEjerciciosComunes([...ejerciciosComunes, newEjercicio]);
    } else {
      setEjerciciosPersonalizados([...ejerciciosPersonalizados, newEjercicio]);
      
      setTipoFiltro('personalizados');
    }
    
    setEjercicios([...ejercicios, newEjercicio]);
  };

  const handleUpdateSuccess = (updatedEjercicio) => {
    setEjercicios(prevEjercicios =>
      prevEjercicios.map(ej => 
        ej.id === updatedEjercicio.id ? updatedEjercicio : ej
      )
    );

    if (updatedEjercicio.esComun) {
      setEjerciciosComunes(prevComunes => 
        prevComunes.map(ej => 
          ej.id === updatedEjercicio.id ? updatedEjercicio : ej
        )
      );
    } else {
      setEjerciciosPersonalizados(prevPersonalizados => 
        prevPersonalizados.map(ej => 
          ej.id === updatedEjercicio.id ? updatedEjercicio : ej
        )
      );
    }

    setEjercicioEditando(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para acceder a tus ejercicios.</p>
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
            <p className="text-xl text-blue-400 font-medium">Cargando ejercicios...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Mis Ejercicios</h1>
        
        {/* Filtros de ejercicios */}
        {!selectedEjercicio && (
          <div className="flex justify-center mb-6 bg-gray-800 p-3 rounded-lg shadow-lg">
            <button 
              type="button"
              onClick={() => setTipoFiltro('todos')} 
              className={`px-4 py-2 mx-1 rounded-md ${tipoFiltro === 'todos' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Todos
            </button>
            <button 
              type="button"
              onClick={() => setTipoFiltro('comunes')} 
              className={`px-4 py-2 mx-1 rounded-md ${tipoFiltro === 'comunes' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Ejercicios comunes
            </button>
            <button 
              type="button"
              onClick={() => setTipoFiltro('personalizados')} 
              className={`px-4 py-2 mx-1 rounded-md ${tipoFiltro === 'personalizados' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Mis ejercicios
            </button>
          </div>
        )}
        
        {/* Exercise Details View */}
        {selectedEjercicio ? (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedEjercicio.nombre}</h2>
              <button 
                onClick={closeDetails}
                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="mb-6 bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Categoría
              </h3>
              <p className="text-gray-300">{selectedEjercicio.categoria || "Sin categoría"}</p>
            </div>
            
            <div className="mb-8 bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Descripción
              </h3>
              <p className="text-gray-300 whitespace-pre-line">{selectedEjercicio.descripcion || "Sin descripción"}</p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
              <button
                onClick={() => {
                  handleEditEjercicio(selectedEjercicio);
                  closeDetails();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md shadow-md transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Ejercicio
              </button>
              <button
                onClick={() => {
                  openDeleteModal(selectedEjercicio);
                  closeDetails();
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md shadow-md transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar Ejercicio
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Form section - Usar componentes separados */}
            {!selectedEjercicio && (
              ejercicioEditando ? (
                <EditEjercicio 
                  ejercicio={ejercicioEditando}
                  onSubmitSuccess={handleUpdateSuccess}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <AddEjercicio 
                  onSubmitSuccess={handleAddSuccess}
                />
              )
            )}

            {/* Exercise List with Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
                {tipoFiltro === 'todos' ? 'Lista de Ejercicios' : 
                 tipoFiltro === 'comunes' ? 'Ejercicios Comunes' : 'Mis Ejercicios Personalizados'}
              </h2>
              
              {/* Buscador de ejercicios */}
              <div className="w-full md:w-auto md:min-w-[300px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Buscar ejercicios..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
            </div>

            {ejerciciosFiltrados().length === 0 ? (
              <div className="text-center bg-gray-800 rounded-lg p-10 max-w-xl mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className="text-2xl font-bold text-white mb-3">No hay ejercicios</h2>
                {searchTerm ? (
                  <p className="text-lg text-gray-300 mb-6">No se encontraron ejercicios que coincidan con "{searchTerm}"</p>
                ) : tipoFiltro === 'personalizados' ? (
                  <p className="text-lg text-gray-300 mb-6">¡Usa el formulario de arriba para añadir tu primer ejercicio personalizado!</p>
                ) : (
                  <p className="text-lg text-gray-300 mb-6">No se encontraron ejercicios en esta categoría.</p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ejerciciosFiltrados().map((ejercicio) => (
                  <div
                    key={ejercicio.id}
                    className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 
                                ${ejercicio.esComun ? 'border-l-4 border-blue-500' : 'border-l-4 border-green-500'}`}
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold text-white line-clamp-1">{ejercicio.nombre}</h2>
                        {!ejercicio.esComun && (
                          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                            Personalizado
                          </span>
                        )}
                      </div>
                      <div className="bg-gray-700/50 px-3 py-1 inline-block rounded-full text-sm text-blue-400 mb-3">
                        {ejercicio.categoria || "Sin categoría"}
                      </div>
                      <p className="text-gray-400 mb-4 line-clamp-2 h-12">{ejercicio.descripcion || "Sin descripción"}</p>
                    </div>
                    
                    <div className="bg-gray-700/50 p-4 flex justify-between">
                      <button
                        onClick={() => handleViewDetails(ejercicio)}
                        className="flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-md flex-1 mr-2 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver
                      </button>
                      <button
                        onClick={() => handleEditEjercicio(ejercicio)}
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex-1 mr-2 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Editar
                      </button>
                      <button
                        onClick={() => openDeleteModal(ejercicio)}
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
        
        {/* Delete Confirmation Modal */}
        {showDeleteModal && ejercicioToDelete && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all">
              <div className="text-center mb-5">
                {deleteError ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white mt-3 mb-2">No se pudo eliminar</h3>
                    <p className="text-red-400 mb-6">{deleteError}</p>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white mt-3 mb-2">Confirmar eliminación</h3>
                    <p className="text-gray-300">
                      ¿Estás seguro de que quieres eliminar el ejercicio <span className="font-semibold text-white">{ejercicioToDelete.nombre}</span>?
                    </p>
                    <p className="text-yellow-400 text-sm mt-2">
                      Si este ejercicio se utiliza en alguna rutina, no podrá ser eliminado.
                    </p>
                  </>
                )}
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className={`px-4 py-2 ${deleteError ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'} text-white rounded transition-colors`}
                >
                  {deleteError ? 'Entendido' : 'Cancelar'}
                </button>
                {!deleteError && (
                  <button
                    onClick={handleDeleteEjercicio}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ejercicios;
