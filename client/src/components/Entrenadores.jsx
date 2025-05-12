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

  // Manejar cambios en el estado de login
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('usuarioId'));
    };

    window.addEventListener('storage', handleStorageChange);
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

  const especialidades = [...new Set(entrenadores.map(e => e.especialidad))];  const handleContratacion = async (entrenadorId) => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      if (!usuarioId) {
        alert('Debes iniciar sesión para contratar un entrenador');
        return;
      }

      await axios.post('/api/contrataciones', {
        entrenadorId,
        usuarioId,
        planSeleccionado,
        fechaInicio: new Date().toISOString()
      });

      alert('¡Contratación exitosa!');
      setModalEntrenador(null);
      
      // Recargar ambas listas para actualizar cambios
      await Promise.all([
        fetchEntrenadores(),
        fetchEntrenadoresContratados()
      ]);
    } catch (error) {
      console.error('Error al realizar la contratación:', error);
      const mensaje = error.response?.data?.error || 'Error al realizar la contratación';
      alert(mensaje);
    }
  };
  const calcularPrecio = (precioBase) => {
    const precios = {
      mensual: precioBase,
      trimestral: precioBase * 3 * 0.9, // 10% descuento en el total
      anual: precioBase * 12 * 0.83 // 17% descuento en el total
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
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para ver nuestros entrenadores.</p>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative bg-gray-900 min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto">
          <p className="text-white">Cargando...</p>
        </div>
      </div>
    );
  }  return (
    <div className="relative bg-gray-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Entrenadores y Nutricionistas</h1>
        
        {/* Sección de Entrenadores Contratados */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Mis Entrenadores Activos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrenadoresContratados.filter(c => c.estado === 'activa').map(contratacion => (
              <div
                key={contratacion.id}
                className="bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-blue-500"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-700">
                  <img
                    src={contratacion.entrenador.fotoUrl || 'https://via.placeholder.com/300x300.png?text=Entrenador'}
                    alt={contratacion.entrenador.nombre}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300.png?text=Entrenador';
                    }}
                  />
                </div>
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
              >                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-700">
                  <img
                    src={entrenador.fotoUrl || 'https://via.placeholder.com/300x300.png?text=Entrenador'}
                    alt={entrenador.nombre}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300.png?text=Entrenador';
                    }}
                  />
                </div>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
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
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleContratacion(modalEntrenador.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Confirmar Contratación
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
