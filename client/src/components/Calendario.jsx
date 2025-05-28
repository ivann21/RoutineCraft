import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Calendario = () => {
  const [eventos, setEventos] = useState([]);
  const [rutinas, setRutinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedRutina, setSelectedRutina] = useState('');
  const [error, setError] = useState(null);  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [weekDays] = useState(['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']);
  const [colorMap, setColorMap] = useState({});

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('usuarioId'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const fetchRutinas = async () => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      const response = await axios.get(`/api/rutinas/${usuarioId}`);
      setRutinas(response.data);
      
      const colors = generateColorsForRutinas(response.data);
      setColorMap(colors);
    } catch (error) {
      console.error('Error al obtener rutinas:', error);
      setError('Error al cargar las rutinas');
    }
  };

  const fetchEventos = async () => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      const response = await axios.get(`/api/calendario/${usuarioId}`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const currentEvents = response.data.filter(evento => {
        const eventDate = new Date(evento.fecha);
        return eventDate >= today;
      });
      const pastEvents = response.data.filter(evento => {
        const eventDate = new Date(evento.fecha);
        return eventDate < today;
      });
      for (const evento of pastEvents) {
        await axios.delete(`/api/calendario/${evento.id}`);
      }
      setEventos(currentEvents);
      setError(null);
    } catch (error) {
      console.error('Error al obtener eventos del calendario:', error);
      setError('Error al cargar los eventos del calendario');
    } finally {
      setLoading(false);
    }
  };

  const generateColorsForRutinas = (rutinas) => {
    const colors = {};
    const predefinedColors = [
      'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-pink-600', 
      'bg-yellow-600', 'bg-indigo-600', 'bg-red-600', 'bg-orange-600',
      'bg-teal-600', 'bg-cyan-600', 'bg-lime-600', 'bg-emerald-600',
      'bg-violet-600', 'bg-fuchsia-600', 'bg-rose-600', 'bg-amber-600'
    ];
    
    rutinas.forEach((rutina, index) => {
      colors[rutina.id] = predefinedColors[index % predefinedColors.length];
    });
    
    return colors;
  };

  const getColorForRutina = (rutinaId) => {
    return colorMap[rutinaId] || 'bg-gray-600'; 
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchRutinas();
      fetchEventos();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const handleAddEvento = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedRutina) {
      alert('Por favor selecciona una fecha y una rutina');
      return;
    }

    try {
      const usuarioId = localStorage.getItem('usuarioId');
      await axios.post('/api/calendario', {
        usuarioId: parseInt(usuarioId),
        rutinaId: parseInt(selectedRutina),
        fecha: new Date(selectedDate).toISOString()
      });

      alert('Rutina programada con éxito');
      fetchEventos();
      setSelectedDate('');
      setSelectedRutina('');
    } catch (error) {
      console.error('Error al programar la rutina:', error);
      alert('Error al programar la rutina');
    }
  };

  const handleDeleteEvento = async (eventoId) => {
    try {
      await axios.delete(`/api/calendario/${eventoId}`);
      fetchEventos(); 
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      alert('Error al eliminar el evento');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para acceder a tu calendario.</p>
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
  }
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(selectedMonth);
    const firstDay = getFirstDayOfMonth(selectedMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1));
  };

  const getEventosForDay = (day) => {
    if (!day) return [];
    const date = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
    return eventos.filter(evento => {
      const eventDate = new Date(evento.fecha);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const handleViewRutinaDetails = (rutinaId) => {
    localStorage.setItem('viewRutinaDetails', rutinaId);
    window.location.href = '/rutinas'; 
  };

  return (
    <div className="relative bg-gray-900 min-h-screen pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Mi Calendario de Entrenamiento</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panel izquierdo: Calendario */}
          <div className="lg:col-span-2">
            {/* Calendario Visual */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handlePrevMonth}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md shadow transition-colors"
                >
                  &lt; Mes anterior
                </button>
                <h2 className="text-2xl font-bold text-white">
                  {selectedMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
                </h2>
                <button
                  onClick={handleNextMonth}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md shadow transition-colors"
                >
                  Mes siguiente &gt;
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-gray-300 font-medium py-2 bg-gray-700/50 rounded">
                    {day}
                  </div>
                ))}
                {generateCalendarDays().map((day, index) => {
                  const eventos = getEventosForDay(day);
                  const isToday = day === currentDate.getDate() && 
                                selectedMonth.getMonth() === currentDate.getMonth() && 
                                selectedMonth.getFullYear() === currentDate.getFullYear();
                  
                  return (
                    <div
                      key={`${index}-${day}`}
                      className={`
                        min-h-[80px] p-2 rounded-md border transition-all duration-200
                        ${day ? 'bg-gray-700 border-gray-600' : 'bg-transparent border-transparent'}
                        ${isToday ? 'ring-2 ring-blue-500' : ''}
                        ${day ? 'hover:shadow-md hover:border-gray-500' : ''}
                      `}
                    >
                      {day && (
                        <>
                          <div className={`text-sm mb-1 font-medium ${isToday ? 'text-blue-400' : 'text-gray-400'}`}>
                            {day}
                          </div>
                          <div className="space-y-1 max-h-[60px] overflow-y-auto pr-1 custom-scrollbar">
                            {eventos.map((evento) => (
                              <button
                                key={evento.id}
                                onClick={() => handleViewRutinaDetails(evento.rutina.id)}
                                className={`
                                  block w-full text-left text-xs ${getColorForRutina(evento.rutina.id)} 
                                  text-white p-1.5 rounded truncate hover:brightness-110 
                                  transition-all duration-200 shadow-sm
                                `}
                              >
                                {evento.rutina.nombre}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Lista de eventos programados */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Rutinas Programadas
              </h2>
              {error ? (
                <div className="text-red-500 text-center p-4 bg-red-100/10 rounded-lg">
                  {error}
                </div>
              ) : eventos.length === 0 ? (
                <div className="text-white text-center p-8 bg-gray-700/50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-300">No hay rutinas programadas todavía</p>
                  <p className="text-gray-400 text-sm mt-2">Programa tu primera rutina usando el formulario</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {eventos.map(evento => (
                    <div
                      key={evento.id}
                      className="bg-gray-700 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-full min-h-[40px] rounded-l-md ${getColorForRutina(evento.rutina.id)} mr-3`}></div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{evento.rutina.nombre}</h3>
                          <p className="text-gray-400 text-sm">
                            {new Date(evento.fecha).toLocaleDateString('es-ES', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            }).replace(/^\w/, c => c.toUpperCase())}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewRutinaDetails(evento.rutina.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md shadow-sm transition-colors flex items-center text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Ver
                        </button>
                        <button
                          onClick={() => handleDeleteEvento(evento.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md shadow-sm transition-colors flex items-center text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Panel derecho: Formulario y Leyenda */}
          <div className="lg:col-span-1">
            {/* Formulario para añadir evento */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Programar Rutina
              </h3>
              <form onSubmit={handleAddEvento} className="space-y-4">
                <div>
                  <label className="block text-white mb-2 font-medium">Fecha</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Rutina</label>
                  <select
                    value={selectedRutina}
                    onChange={(e) => setSelectedRutina(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    required
                  >
                    <option value="">Selecciona una rutina</option>
                    {rutinas.map(rutina => (
                      <option key={rutina.id} value={rutina.id}>
                        {rutina.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm hover:shadow flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Programar Rutina
                </button>
              </form>
            </div>

            {/* Leyenda de colores para rutinas */}
            {rutinas.length > 0 && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Leyenda de Rutinas
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {rutinas.map(rutina => (
                    <div 
                      key={rutina.id} 
                      className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-700/50 transition-colors"
                      onClick={() => handleViewRutinaDetails(rutina.id)}
                      style={{cursor: 'pointer'}}
                    >
                      <div className={`w-4 h-4 rounded-full ${getColorForRutina(rutina.id)} mr-3`}></div>
                      <span className="text-gray-300 truncate">{rutina.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
