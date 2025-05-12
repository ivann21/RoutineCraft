import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditRutina = () => {  const navigate = useNavigate();
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ejerciciosDisponibles, setEjerciciosDisponibles] = useState([]);
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {    const fetchRutina = async () => {
      try {
        const [rutinaResponse, ejerciciosResponse] = await Promise.all([
          axios.get(`/api/rutina/${id}`),
          axios.get('/api/ejercicios')
        ]);
        
        const rutina = rutinaResponse.data;
        console.log('Rutina recibida:', rutina); // Log para debug
        if (!rutina || !rutina.ejercicios) {
          throw new Error('La rutina no tiene la estructura esperada');
        }
        setNombre(rutina.nombre);
        setDescripcion(rutina.descripcion);
        // Mapeamos los ejercicios manteniendo la consistencia de campos
        const ejerciciosFormateados = rutina.ejercicios.map(e => {
          if (!e.ejercicio) {
            console.error('Ejercicio sin la propiedad ejercicio:', e);
            return null;
          }
          return {
            ejercicioId: e.ejercicio.id,
            ejercicio: e.ejercicio,
            series: e.series,
            repeticiones: e.repeticiones,
            descansoSegundos: e.descansoSegundos,
            orden: e.orden
          };
        }).filter(e => e !== null);

        console.log('Ejercicios formateados:', ejerciciosFormateados); // Log para debug
        setEjerciciosSeleccionados(ejerciciosFormateados);
        setEjerciciosDisponibles(ejerciciosResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar la rutina:', error);
        alert('Error al cargar la rutina: ' + error.message);
        navigate('/rutinas');
      }
    };

    fetchRutina();
  }, [id, navigate]);
  const handleAddEjercicio = () => {
    const ejercicio = ejerciciosDisponibles.find(e => e.id === parseInt(ejercicioSeleccionado));
    if (ejercicio && !ejerciciosSeleccionados.some(e => e.ejercicioId === ejercicio.id)) {
      setEjerciciosSeleccionados([...ejerciciosSeleccionados, {
        ejercicioId: ejercicio.id,
        ejercicio: ejercicio,
        series: 3,
        repeticiones: 12,
        descansoSegundos: 60,
        orden: ejerciciosSeleccionados.length + 1
      }]);
      setEjercicioSeleccionado(''); // Limpiar la selección después de agregar
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
      
      // Validar que tengamos todos los datos necesarios
      if (!nombre.trim()) {
        throw new Error('El nombre de la rutina es requerido');
      }

      // Asegurar que todos los ejercicios tengan los campos requeridos
      const ejerciciosValidados = ejerciciosSeleccionados.map((e, index) => {
        if (!e.ejercicioId || !e.series || !e.repeticiones || e.descansoSegundos === undefined) {
          throw new Error(`El ejercicio ${index + 1} tiene datos incompletos`);
        }
        return {
          id: e.ejercicioId,
          series: parseInt(e.series),
          repeticiones: parseInt(e.repeticiones),
          descansoSegundos: parseInt(e.descansoSegundos),
          orden: index + 1 // Aseguramos que el orden sea secuencial
        };
      });

      const rutinaActualizada = {
        nombre,
        descripcion,
        ejercicios: ejerciciosValidados,
      };

      console.log('Enviando actualización:', rutinaActualizada); // Log para debug
      
      await axios.put(`/api/rutinas/${id}`, { ...rutinaActualizada, usuarioId });
      alert('Rutina actualizada con éxito');
      navigate('/rutinas');
    } catch (error) {
      console.error('Error al actualizar la rutina:', error);
      alert('Hubo un error al actualizar la rutina');
    }
  };

  if (loading) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto">
          <p className="text-white">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-white">Editar Rutina</h1>
          <button
            onClick={() => navigate('/rutinas')}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Volver
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2">Nombre de la Rutina</label>
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
            <label className="block text-white mb-2">Ejercicios</label>            <div className="flex items-center space-x-4">
              <select
                value={ejercicioSeleccionado}
                onChange={(e) => setEjercicioSeleccionado(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white"
              >
                <option value="">Selecciona un ejercicio</option>
                {ejerciciosDisponibles.map((ejercicio) => (
                  <option key={ejercicio.id} value={ejercicio.id}>
                    {ejercicio.nombre}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddEjercicio}
                disabled={!ejercicioSeleccionado}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md"
              >
                Agregar
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              {ejerciciosSeleccionados.map((ejercicio) => (
                <li key={ejercicio.ejercicioId} className="bg-gray-700 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{ejercicio.ejercicio.nombre}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveEjercicio(ejercicio.ejercicioId)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">Series</label>
                      <input
                        type="number"
                        value={ejercicio.series}
                        onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'series', e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">Repeticiones</label>
                      <input
                        type="number"
                        value={ejercicio.repeticiones}
                        onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'repeticiones', e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">Descanso (seg)</label>
                      <input
                        type="number"
                        value={ejercicio.descansoSegundos}
                        onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'descansoSegundos', e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">Orden</label>
                      <input
                        type="number"
                        value={ejercicio.orden}
                        onChange={(e) => handleUpdateEjercicioDetails(ejercicio.ejercicioId, 'orden', e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
                        min="1"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => navigate('/rutinas')}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRutina;
