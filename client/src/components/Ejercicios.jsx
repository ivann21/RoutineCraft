import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));
  const [ejercicioEditando, setEjercicioEditando] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [ejercicioToDelete, setEjercicioToDelete] = useState(null);
  const [deleteError, setDeleteError] = useState('');
  const [selectedEjercicio, setSelectedEjercicio] = useState(null);

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
          const response = await axios.get('/api/ejercicios');
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

  const handleAddEjercicio = async (e) => {
    e.preventDefault();
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('categoria', categoria);
      formData.append('usuarioId', usuarioId);

      const response = await axios.post('/api/ejercicios', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setEjercicios([...ejercicios, response.data]);
      setNombre('');
      setDescripcion('');
      setCategoria('');
    } catch (error) {
      console.error('Error al añadir el ejercicio:', error);
    }
  };

  const handleEditEjercicio = (ejercicio) => {
    setEjercicioEditando(ejercicio);
    setNombre(ejercicio.nombre);
    setDescripcion(ejercicio.descripcion);
    setCategoria(ejercicio.categoria);
  };

  const handleUpdateEjercicio = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('categoria', categoria);

      await axios.put(`/api/ejercicios/${ejercicioEditando.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setEjercicios((prevEjercicios) =>
        prevEjercicios.map((ej) =>
          ej.id === ejercicioEditando.id
            ? { ...ej, nombre, descripcion, categoria }
            : ej
        )
      );

      setEjercicioEditando(null);
      setNombre('');
      setDescripcion('');
      setCategoria('');
    } catch (error) {
      console.error('Error al actualizar el ejercicio:', error);
    }
  };

  const openDeleteModal = (ejercicio) => {
    setEjercicioToDelete(ejercicio);
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const handleDeleteEjercicio = async () => {
    try {
      await axios.delete(`/api/ejercicios/${ejercicioToDelete.id}`);
      setEjercicios(ejercicios.filter((ejercicio) => ejercicio.id !== ejercicioToDelete.id));
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
    setNombre('');
    setDescripcion('');
    setCategoria('');
  };

  const handleViewDetails = (ejercicio) => {
    setSelectedEjercicio(ejercicio);
  };

  const closeDetails = () => {
    setSelectedEjercicio(null);
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
            {/* Form section */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  {ejercicioEditando ? 'Editar Ejercicio' : 'Añadir Nuevo Ejercicio'}
                </h2>
                {ejercicioEditando && (
                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancelar
                  </button>
                )}
              </div>
              
              <form onSubmit={ejercicioEditando ? handleUpdateEjercicio : handleAddEjercicio} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white mb-2 font-medium">Nombre del Ejercicio</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Ej: Flexiones de pecho"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Categoría</label>
                    <input
                      type="text"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Ej: Pecho, Brazos, Piernas..."
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Descripción</label>
                  <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows="3"
                    placeholder="Describe cómo realizar este ejercicio correctamente"
                  ></textarea>
                </div>
                <div className="flex justify-end pt-3">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {ejercicioEditando ? 'Guardar Cambios' : 'Añadir Ejercicio'}
                  </button>
                </div>
              </form>
            </div>

            {/* Exercise List */}
            <h2 className="text-2xl font-bold text-white mb-6">Lista de Ejercicios</h2>
            {ejercicios.length === 0 ? (
              <div className="text-center bg-gray-800 rounded-lg p-10 max-w-xl mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className="text-2xl font-bold text-white mb-3">No hay ejercicios</h2>
                <p className="text-lg text-gray-300 mb-6">¡Usa el formulario de arriba para añadir tu primer ejercicio!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ejercicios.map((ejercicio) => (
                  <div
                    key={ejercicio.id}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="p-5">
                      <h2 className="text-2xl font-bold text-white mb-2 line-clamp-1">{ejercicio.nombre}</h2>
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
