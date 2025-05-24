import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchableSelect from './SearchableSelect';

const AddRutina = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState('');
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const [loading, setLoading] = useState(false);  // Declarado correctamente
  const [error, setError] = useState(null);  // Declarado correctamente
  const [showEjercicioExistenteModal, setShowEjercicioExistenteModal] = useState(false);
  const [ejercicioExistente, setEjercicioExistente] = useState(null);
  const [filtroEjercicios, setFiltroEjercicios] = useState('todos'); // 'todos', 'comunes', 'personalizados'
  
  // No necesitamos searchTerm si estamos usando SearchableSelect que maneja su propia búsqueda
  
  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        setLoading(true);
        const usuarioId = localStorage.getItem('usuarioId');
        const response = await axios.get(`/api/ejercicios?usuarioId=${usuarioId}`);
        setEjercicios(response.data);
      } catch (err) {
        console.error('Error al obtener los ejercicios:', err);
        setError('Error al cargar los ejercicios: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEjercicios();
  }, []);

  // Función mejorada que filtra por tipo de ejercicio
  const ejerciciosFiltrados = () => {
    if (filtroEjercicios === 'comunes') {
      return ejercicios.filter(e => e.esComun);
    } else if (filtroEjercicios === 'personalizados') {
      return ejercicios.filter(e => !e.esComun);
    } else {
      return ejercicios;
    }
  };
  
  const handleAddEjercicio = () => {
    if (!ejercicioSeleccionado) return;
    
    const ejercicio = ejercicios.find(e => e.id === parseInt(ejercicioSeleccionado));
    // Verificar si el ejercicio ya existe en la lista por ejercicioId
    if (ejercicio && !ejerciciosSeleccionados.some(e => e.ejercicioId === ejercicio.id)) {
      setEjerciciosSeleccionados([...ejerciciosSeleccionados, {
        ejercicioId: ejercicio.id,
        ejercicio: ejercicio,
        series: 3,
        repeticiones: 12,
        descansoSegundos: 60,
        orden: ejerciciosSeleccionados.length > 0 
          ? Math.max(...ejerciciosSeleccionados.map(e => e.orden)) + 1 
          : 1
      }]);
      setEjercicioSeleccionado('');
    } else if (ejercicio) {
      // Si el ejercicio ya existe, guardamos la información y mostramos el modal
      setEjercicioExistente(ejercicio);
      setShowEjercicioExistenteModal(true);
    }
  };

  const handleRemoveEjercicio = (ejercicioId) => {
    setEjerciciosSeleccionados(ejerciciosSeleccionados.filter(e => e.ejercicioId !== ejercicioId));
  };

  const handleUpdateEjercicioDetails = (ejercicioId, field, value) => {
    setEjerciciosSeleccionados(ejerciciosSeleccionados.map(e => {
      if (e.ejercicioId === ejercicioId) {
        return { ...e, [field]: parseInt(value) };
      }
      return e;
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      if (!usuarioId) {
        throw new Error('No se encontró el ID del usuario');
      }

      if (!nombre.trim()) {
        throw new Error('El nombre de la rutina es requerido');
      }

      if (ejerciciosSeleccionados.length === 0) {
        throw new Error('Debes añadir al menos un ejercicio a la rutina');
      }

      // Validar y formatear los ejercicios
      const ejerciciosFormateados = ejerciciosSeleccionados.map((e, index) => ({
        id: parseInt(e.ejercicioId),
        series: parseInt(e.series) || 3,
        repeticiones: parseInt(e.repeticiones) || 12,
        descansoSegundos: parseInt(e.descansoSegundos) || 60,
        orden: parseInt(e.orden) || index + 1
      }));

      const nuevaRutina = {
        nombre,
        descripcion,
        ejercicios: ejerciciosFormateados
      };
      
      console.log('Enviando nueva rutina:', { ...nuevaRutina, usuarioId });
      const response = await axios.post(`/api/rutinas`, { ...nuevaRutina, usuarioId });
      console.log('Respuesta del servidor:', response.data);
      
      alert('Rutina añadida con éxito');
      navigate('/rutinas');
    } catch (error) {
      console.error('Error al añadir la rutina:', error);
      alert('Hubo un error al añadir la rutina');
    }
  };

  // Preparamos las opciones para el SearchableSelect
  const ejercicioOptions = ejerciciosFiltrados().map(ejercicio => ({
    value: ejercicio.id.toString(),
    label: `${ejercicio.nombre}${ejercicio.categoria ? ` - ${ejercicio.categoria}` : ''}`,
    customProp: !ejercicio.esComun ? 'Personalizado' : null
  }));

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Crear Nueva Rutina</h1>
          <button
            onClick={() => navigate('/rutinas')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors flex items-center shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Volver a Rutinas
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : error ? (
          <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        ) : (
          // Resto del contenido cuando los datos están cargados
          <>
            {/* Modal para ejercicio existente */}
            {showEjercicioExistenteModal && ejercicioExistente && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn">
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all">
                  <div className="text-center mb-5">
                    <div className="bg-blue-500/20 p-4 rounded-full inline-block mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ejercicio ya añadido</h3>
                    <p className="text-gray-300">
                      El ejercicio <span className="font-semibold text-blue-400">{ejercicioExistente.nombre}</span> ya está incluido en esta rutina.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-3 rounded-lg mb-5">
                    <p className="text-sm text-gray-300">
                      Si deseas modificar las series, repeticiones o descanso, puedes hacerlo directamente en el ejercicio ya añadido.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setShowEjercicioExistenteModal(false);
                        setEjercicioExistente(null);
                        setEjercicioSeleccionado('');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md shadow-md transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Entendido
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">Nombre de la Rutina</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Ej: Entrenamiento de Pecho y Bíceps"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Descripción</label>
                    <textarea
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      rows="1"
                      placeholder="Breve descripción de la rutina (opcional)"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Ejercicios de la Rutina
                    </h2>
                    <span className="text-blue-400 text-sm">{ejerciciosSeleccionados.length} ejercicios añadidos</span>
                  </div>

                  <div className="bg-gray-700 p-5 rounded-lg shadow-inner mb-6">
                    <label className="block text-white mb-2 font-medium">Añadir Ejercicio</label>
                    
                    {/* Filtros para ejercicios - Agregar type="button" a cada botón */}
                    <div className="flex mb-4 bg-gray-700 p-2 rounded-lg">
                      <button 
                        type="button"  // Asegúrate que sea type="button"
                        onClick={() => setFiltroEjercicios('todos')} 
                        className={`px-4 py-2 mx-1 rounded-md ${filtroEjercicios === 'todos' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                      >
                        Todos
                      </button>
                      <button 
                        type="button"  // Asegúrate que sea type="button"
                        onClick={() => setFiltroEjercicios('comunes')} 
                        className={`px-4 py-2 mx-1 rounded-md ${filtroEjercicios === 'comunes' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                      >
                        Ejercicios comunes
                      </button>
                      <button 
                        type="button"  // Asegúrate que sea type="button"
                        onClick={() => setFiltroEjercicios('personalizados')} 
                        className={`px-4 py-2 mx-1 rounded-md ${filtroEjercicios === 'personalizados' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                      >
                        Mis ejercicios
                      </button>
                    </div>
                    
                    {/* Reemplazo del select con nuestro SearchableSelect */}
                    <div className="flex space-x-4">
                      <div className="flex-grow">
                        <SearchableSelect 
                          options={ejercicioOptions}
                          value={ejercicioSeleccionado}
                          onChange={setEjercicioSeleccionado}
                          placeholder="Buscar o seleccionar un ejercicio..."
                          className="w-full"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleAddEjercicio}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        disabled={!ejercicioSeleccionado}
                      >
                        Añadir
                      </button>
                    </div>
                    
                    {/* Mensaje cuando no hay resultados */}
                    {ejerciciosFiltrados().length === 0 && (
                      <div className="mt-3 text-center text-gray-400">
                        No se encontraron ejercicios con los filtros aplicados
                      </div>
                    )}
                  </div>

                  {ejerciciosSeleccionados.length > 0 ? (
                    <ul className="space-y-5 mb-8">
                      {ejerciciosSeleccionados.map((ejercicio, index) => (
                        <li 
                          key={ejercicio.ejercicioId} 
                          className={`bg-gray-700 p-5 rounded-lg shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-green-500'}`}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-white">{ejercicio.ejercicio.nombre}</h3>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-300 mr-4">Ejercicio #{ejercicio.orden}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveEjercicio(ejercicio.ejercicioId)}
                                className="text-red-400 hover:text-red-500 transition-colors p-1"
                                title="Eliminar ejercicio"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                              <label className="block text-sm text-gray-300 mb-2">Series</label>
                              <input
                                type="number"
                                value={ejercicio.series}
                                onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'series', e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-blue-500 focus:outline-none"
                                min="1"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-300 mb-2">Repeticiones</label>
                              <input
                                type="number"
                                value={ejercicio.repeticiones}
                                onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'repeticiones', e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-blue-500 focus:outline-none"
                                min="1"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-300 mb-2">Descanso (seg)</label>
                              <input
                                type="number"
                                value={ejercicio.descansoSegundos}
                                onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'descansoSegundos', e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-blue-500 focus:outline-none"
                                min="0"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-300 mb-2">Orden</label>
                              <input
                                type="number"
                                value={ejercicio.orden}
                                onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'orden', e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-blue-500 focus:outline-none"
                                min="1"
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-10 bg-gray-700/50 rounded-lg mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <p className="text-gray-400">No hay ejercicios añadidos</p>
                      <p className="text-gray-500 text-sm mt-1">Selecciona uno del menú desplegable y haz clic en "Agregar"</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                  <button
                    type="button"  // Asegúrate que sea type="button"
                    onClick={() => navigate('/rutinas')}
                    className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-md transition-colors flex items-center shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancelar
                  </button>
                  <button
                    type="submit"  // Este sí debe ser type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition-colors shadow-md flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Guardar Rutina
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddRutina;
