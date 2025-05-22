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

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Mis Ejercicios</h1>
        
        {/* Form section */}
        {!selectedEjercicio && (
          <form onSubmit={ejercicioEditando ? handleUpdateEjercicio : handleAddEjercicio} className="space-y-4 mb-6">
            <div>
              <label className="block text-white mb-2">Nombre del Ejercicio</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Descripción</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              ></textarea>
            </div>
            <div>
              <label className="block text-white mb-2">Categoría</label>
              <input
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              />
            </div>
            <div className="text-center space-x-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md"
              >
                {ejercicioEditando ? 'Guardar Cambios' : 'Añadir Ejercicio'}
              </button>
              {ejercicioEditando && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md"
                >
                  Cancelar Edición
                </button>
              )}
            </div>
          </form>
        )}
        
        {/* Exercise Details View */}
        {selectedEjercicio ? (
          <div className="bg-gray-800 rounded-lg p-6 mb-8 animate-fadeIn">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedEjercicio.nombre}</h2>
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
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Categoría</h3>
              <p className="text-gray-300">{selectedEjercicio.categoria || "Sin categoría"}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Descripción</h3>
              <p className="text-gray-300 whitespace-pre-line">{selectedEjercicio.descripcion || "Sin descripción"}</p>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => {
                  handleEditEjercicio(selectedEjercicio);
                  closeDetails();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  openDeleteModal(selectedEjercicio);
                  closeDetails();
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          // Exercise List
          <>
            {ejercicios.length === 0 ? (
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">No tienes ejercicios aún. ¡Empieza a crear uno!</p>
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ejercicios.map((ejercicio) => (
                  <li
                    key={ejercicio.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-750 transition-shadow"
                  >
                    <h2 className="text-xl font-semibold text-white">{ejercicio.nombre}</h2>
                    <p className="text-gray-400 mt-2 line-clamp-2">{ejercicio.descripcion || "Sin descripción"}</p>
                    <p className="text-gray-400 mt-2">Categoría: {ejercicio.categoria || "Sin categoría"}</p>
                    
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => handleViewDetails(ejercicio)}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                      >
                        Ver detalles
                      </button>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditEjercicio(ejercicio)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => openDeleteModal(ejercicio)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {/* Delete Confirmation Modal */}
        {showDeleteModal && ejercicioToDelete && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Confirmar eliminación</h3>
              {deleteError ? (
                <>
                  <p className="text-red-400 mb-6">{deleteError}</p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Entendido
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-300 mb-6">
                    ¿Estás seguro de que quieres eliminar el ejercicio <span className="font-semibold text-white">{ejercicioToDelete.nombre}</span>?
                    <br /><br />
                    <span className="text-yellow-400">Advertencia:</span> Si este ejercicio se usa en alguna rutina, podría causar problemas.
                  </p>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleDeleteEjercicio}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ejercicios;
