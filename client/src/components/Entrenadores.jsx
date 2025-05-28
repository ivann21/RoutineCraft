import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Entrenadores = () => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [entrenadoresContratados, setEntrenadoresContratados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));
  const [modalEntrenador, setModalEntrenador] = useState(null);
  const [planSeleccionado, setPlanSeleccionado] = useState('mensual');
  const [error, setError] = useState(null);
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [processingContratacion, setProcessingContratacion] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('usuarioId'));
    };

    window.addEventListener('storage', handleStorageChange);
    
    setIsLoggedIn(!!localStorage.getItem('usuarioId'));

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const fetchEntrenadores = async () => {
    try {
      const response = await axios.get('/api/entrenadores');
      setEntrenadores(response.data);
      setError(null);
    } catch (error) {
      console.error('Error al obtener entrenadores:', error);
      setError('Error al cargar los entrenadores. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const fetchEntrenadoresContratados = async () => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      const response = await axios.get(`/api/contrataciones/usuario/${usuarioId}`);
      setEntrenadoresContratados(response.data);
    } catch (error) {
      console.error('Error al obtener entrenadores contratados:', error);
      setError('Error al cargar los entrenadores contratados');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        fetchEntrenadores(),
        fetchEntrenadoresContratados()
      ]).catch(error => {
        console.error('Error loading data:', error);
      });
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const especialidades = [...new Set(entrenadores.map(e => e.especialidad))];  

  const handleContratacion = async (entrenadorId) => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      if (!usuarioId) {
        setNotificationMessage('Debes iniciar sesión para contratar un entrenador');
        setShowErrorModal(true);
        return;
      }

      setProcessingContratacion(true);

      await axios.post('/api/contrataciones', {
        entrenadorId,
        usuarioId,
        planSeleccionado,
        fechaInicio: new Date().toISOString()
      });

      setNotificationMessage('¡Has contratado al entrenador exitosamente!');
      setShowSuccessModal(true);
      setModalEntrenador(null);
      
      await Promise.all([
        fetchEntrenadores(),
        fetchEntrenadoresContratados()
      ]);
    } catch (error) {
      console.error('Error al realizar la contratación:', error);
      const mensaje = error.response?.data?.error || 'Error al realizar la contratación';
      
      setNotificationMessage(mensaje);
      setShowErrorModal(true);
    } finally {
      setProcessingContratacion(false);
    }
  };

  const calcularPrecio = (precioBase) => {
    const precios = {
      mensual: precioBase,
      trimestral: precioBase * 3 * 0.9, 
      anual: precioBase * 12 * 0.83 
    };
    const precioTotal = precios[planSeleccionado];
    
    switch (planSeleccionado) {
      case 'trimestral':
        return (precioTotal / 3).toFixed(2);
      case 'anual':
        return (precioTotal / 12).toFixed(2);
      default:
        return precioTotal.toFixed(2);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para acceder a nuestros entrenadores.</p>
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
            <p className="text-xl text-blue-400 font-medium">Cargando entrenadores...</p>
          </div>
        </div>
      </div>
    );
  }  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Nuestros Entrenadores</h1>
        
        {/* Sección de Entrenadores Contratados */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Mis Entrenadores Activos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrenadoresContratados.filter(c => c.estado === 'activa').map(contratacion => (
              <div
                key={contratacion.id}
                className="bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-blue-500"
              >
                <h2 className="text-xl font-semibold text-white mb-2">{contratacion.entrenador.nombre}</h2>
                <p className="text-blue-400 mb-2">{contratacion.entrenador.especialidad}</p>
                <div className="space-y-2 text-gray-300">
                  <p className="capitalize">Plan: {contratacion.planSeleccionado}</p>
                  <p>Inicio: {new Date(contratacion.fechaInicio).toLocaleDateString('es-ES')}</p>
                  <p>Fin: {contratacion.fechaFin ? new Date(contratacion.fechaFin).toLocaleDateString('es-ES') : 'En curso'}</p>
                </div>
              </div>
            ))}
            {entrenadoresContratados.filter(c => c.estado === 'activa').length === 0 && (
              <div className="col-span-full text-gray-300 text-center bg-gray-800 rounded-lg p-6">
                No tienes entrenadores contratados actualmente
              </div>
            )}
          </div>
        </div>{/* Filtros */}
        <div className="mb-6">
          <select
            value={filtroEspecialidad}
            onChange={(e) => setFiltroEspecialidad(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            <option value="">Todas las especialidades</option>
            {especialidades.map(esp => (
              <option key={esp} value={esp}>{esp}</option>
            ))}
          </select>
        </div>        {/* Lista de entrenadores */}
        {error ? (
          <div className="text-center text-red-500 mb-4">{error}</div>
        ) : entrenadores.length === 0 ? (
          <div className="text-center text-white mb-4">No hay entrenadores disponibles en este momento.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrenadores
              .filter(e => !filtroEspecialidad || e.especialidad === filtroEspecialidad)
              .map(entrenador => (
              <div
                key={entrenador.id}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >                
                <h2 className="text-xl font-semibold text-white mb-2">{entrenador.nombre}</h2>
                <p className="text-blue-400 mb-2">{entrenador.especialidad}</p>
                <p className="text-gray-300 mb-4">{entrenador.descripcion}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 mr-2">★</span>
                  <span className="text-white">{entrenador.calificacion || 'Sin calificaciones'}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">Experiencia: {entrenador.experiencia} años</p>
                  <p className="text-gray-300">Precio: ${entrenador.precio}/mes</p>
                </div>
                <button
                  onClick={() => setModalEntrenador(entrenador)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  disabled={!entrenador.disponible}
                >                  {entrenador.disponible ? 'Contratar' : 'No disponible'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Modal de contratación */}
        {modalEntrenador && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30 animate-fadeIn">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-xl border border-gray-700 animate-scaleIn">
              <h2 className="text-2xl font-bold text-white mb-4">Contratar a {modalEntrenador.nombre}</h2>
              
              <div className="mb-4">
                <label className="block text-white mb-2">Selecciona un plan:</label>
                <select
                  value={planSeleccionado}
                  onChange={(e) => setPlanSeleccionado(e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
                >
                  <option value="mensual">Plan Mensual</option>
                  <option value="trimestral">Plan Trimestral (10% descuento)</option>
                  <option value="anual">Plan Anual (17% descuento)</option>
                </select>
              </div>

              <p className="text-white mb-4">
                Precio total: ${calcularPrecio(modalEntrenador.precio)}
                {planSeleccionado !== 'mensual' ? ' por mes' : ''}
              </p>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setModalEntrenador(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleContratacion(modalEntrenador.id)}
                  disabled={processingContratacion}
                  className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center ${processingContratacion ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {processingContratacion ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </>
                  ) : "Confirmar Contratación"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de éxito */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40 animate-fadeIn">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border-2 border-green-500 shadow-xl animate-scaleIn">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">¡Excelente!</h2>
              <p className="text-gray-300 text-center mb-6">{notificationMessage}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de error */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40 animate-fadeIn">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border-2 border-red-500 shadow-xl animate-scaleIn">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">Oops!</h2>
              <p className="text-gray-300 text-center mb-6">{notificationMessage}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Entrenadores;
