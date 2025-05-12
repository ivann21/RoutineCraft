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
    } catch (error) {
      console.error('Error al obtener rutinas:', error);
      setError('Error al cargar las rutinas');
    }
  };

  const fetchEventos = async () => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      const response = await axios.get(`/api/calendario/${usuarioId}`);
      // Filtrar eventos pasados
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const currentEvents = response.data.filter(evento => {
        const eventDate = new Date(evento.fecha);
        return eventDate >= today;
      });
      // Eliminar eventos pasados de la base de datos
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
      fetchEventos(); // Recargar eventos
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
      fetchEventos(); // Recargar eventos
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

    // Agregar días vacíos al principio
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Agregar los días del mes
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

  return (
    <div className="relative bg-gray-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Mi Calendario de Rutinas</h1>

        {/* Calendario Visual */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="text-white hover:text-blue-400"
            >
              &lt; Anterior
            </button>
            <h2 className="text-xl font-bold text-white">
              {selectedMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </h2>
            <button
              onClick={handleNextMonth}
              className="text-white hover:text-blue-400"
            >
              Siguiente &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-gray-400 font-medium py-2">
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
                    min-h-24 p-1 border border-gray-700 rounded-md
                    ${day ? 'bg-gray-700' : 'bg-transparent'}
                    ${isToday ? 'ring-2 ring-blue-500' : ''}
                  `}
                >
                  {day && (
                    <>
                      <div className="text-gray-400 text-sm mb-1">{day}</div>
                      <div className="space-y-1">
                        {eventos.map((evento) => (
                          <Link
                            key={evento.id}
                            to={`/edit-rutina/${evento.rutina.id}`}
                            className="block text-xs bg-blue-600 text-white p-1 rounded truncate hover:bg-blue-700"
                          >
                            {evento.rutina.nombre}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulario para añadir evento */}
        <form onSubmit={handleAddEvento} className="bg-gray-800 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Fecha</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Rutina</label>
              <select
                value={selectedRutina}
                onChange={(e) => setSelectedRutina(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
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
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Programar Rutina
          </button>
        </form>

        {/* Lista de eventos programados */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">Rutinas Programadas</h2>
          {error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : eventos.length === 0 ? (
            <div className="text-white text-center">No hay rutinas programadas</div>
          ) : (
            eventos.map(evento => (
              <div
                key={evento.id}
                className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{evento.rutina.nombre}</h3>
                  <p className="text-gray-400">
                    {new Date(evento.fecha).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/edit-rutina/${evento.rutina.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Ver Rutina
                  </Link>
                  <button
                    onClick={() => handleDeleteEvento(evento.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendario;
