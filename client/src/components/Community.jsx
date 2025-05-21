import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Community() {
  const [publicRoutines, setPublicRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('popular');
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  useEffect(() => {
    fetchPublicRoutines();
  }, [sort]);

  const fetchPublicRoutines = async () => {
    setLoading(true);
    try {
      // Datos de ejemplo para mostrar hasta que implementemos el endpoint
      const mockRoutines = [
        {
          id: 1,
          nombre: 'Rutina Split 4 días',
          descripcion: 'Rutina de 4 días que trabaja todos los grupos musculares para ganar masa muscular',
          usuario: { nombre: 'Carlos Rodríguez' },
          likes: [{ usuarioId: 1 }, { usuarioId: 2 }, { usuarioId: 3 }]
        },
        {
          id: 2,
          nombre: 'Full Body 3x semana',
          descripcion: 'Rutina de cuerpo completo para principiantes, 3 días por semana',
          usuario: { nombre: 'Ana Martínez' },
          likes: [{ usuarioId: 1 }, { usuarioId: 4 }]
        },
        {
          id: 3,
          nombre: 'HIIT para quemar grasa',
          descripcion: 'Entrenamiento de alta intensidad para máxima quema de calorías en poco tiempo',
          usuario: { nombre: 'Pedro López' },
          likes: [{ usuarioId: 2 }, { usuarioId: 3 }, { usuarioId: 5 }, { usuarioId: 6 }]
        },
        {
          id: 4,
          nombre: 'Fuerza y Potencia',
          descripcion: 'Rutina enfocada en aumentar la fuerza máxima con ejercicios compuestos',
          usuario: { nombre: 'Laura González' },
          likes: [{ usuarioId: 1 }]
        },
        {
          id: 5,
          nombre: 'Entrenamiento para Corredores',
          descripcion: 'Rutina específica para mejorar el rendimiento en running con trabajo de fuerza',
          usuario: { nombre: 'Miguel Fernández' },
          likes: [{ usuarioId: 7 }, { usuarioId: 8 }]
        },
        {
          id: 6,
          nombre: 'Circuito de Resistencia',
          descripcion: 'Circuito de ejercicios para mejorar la resistencia cardiovascular y muscular',
          usuario: { nombre: 'Isabel Díaz' },
          likes: [{ usuarioId: 2 }, { usuarioId: 4 }, { usuarioId: 6 }]
        }
      ];
      
      // Ordenar las rutinas según el criterio seleccionado
      if (sort === 'popular') {
        mockRoutines.sort((a, b) => b.likes.length - a.likes.length);
      } else if (sort === 'name') {
        mockRoutines.sort((a, b) => a.nombre.localeCompare(b.nombre));
      }
      
      setPublicRoutines(mockRoutines);
      
      /* Cuando el endpoint esté listo, descomenta este código
      const response = await fetch(`http://localhost:5000/api/rutinas/publicas?sort=${sort}`);
      if (response.ok) {
        const data = await response.json();
        setPublicRoutines(data);
      }
      */
    } catch (error) {
      console.error('Error al cargar rutinas públicas:', error);
    } finally {
      setLoading(false);
    }
  };

  const likeRoutine = async (rutinaId) => {
    try {
      // Simulamos dar like a una rutina
      setPublicRoutines(prev => 
        prev.map(routine => {
          if (routine.id === rutinaId) {
            const userLiked = routine.likes.some(like => like.usuarioId === 1); // Asumimos que el usuario actual tiene ID 1
            if (userLiked) {
              return {
                ...routine,
                likes: routine.likes.filter(like => like.usuarioId !== 1)
              };
            } else {
              return {
                ...routine,
                likes: [...routine.likes, { usuarioId: 1 }]
              };
            }
          }
          return routine;
        })
      );
      
      /* Cuando el endpoint esté listo, descomenta este código
      const user = JSON.parse(localStorage.getItem('user'));
      await fetch('http://localhost:5000/api/rutinas/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rutinaId, usuarioId: user.id })
      });
      fetchPublicRoutines();
      */
    } catch (error) {
      console.error('Error al dar like:', error);
    }
  };

  const filteredRoutines = publicRoutines.filter(routine => 
    routine.nombre.toLowerCase().includes(filter.toLowerCase()) ||
    routine.descripcion.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Comunidad</h1>
        
        <div className="bg-gray-700 rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-between mb-6">
            <div className="flex-1">
              <input 
                type="text"
                placeholder="Buscar rutinas..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              />
            </div>
            <div>
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                <option value="popular">Más populares</option>
                <option value="recent">Más recientes</option>
                <option value="name">Alfabético</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <p className="text-center text-white py-8">Cargando rutinas públicas...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoutines.map(routine => (
                <div key={routine.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{routine.nombre}</h3>
                    <p className="text-gray-400 mb-4">Por: {routine.usuario.nombre}</p>
                    <p className="text-gray-300 line-clamp-3 mb-4">{routine.descripcion}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => likeRoutine(routine.id)}
                          className="flex items-center gap-1 text-gray-400 hover:text-red-500"
                        >
                          {routine.likes.some(like => like.usuarioId === 1) ? 
                            '❤️' : '🤍'}
                          <span>{routine.likes.length}</span>
                        </button>
                      </div>
                      <button
                        onClick={() => setSelectedRoutine(routine)}
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredRoutines.length === 0 && (
                <div className="col-span-full text-center text-gray-400 py-8">
                  No se encontraron rutinas que coincidan con tu búsqueda.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Modal de detalles de rutina */}
      {selectedRoutine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelectedRoutine(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              aria-label="Cerrar"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedRoutine.nombre}</h2>
            <p className="text-gray-400 mb-2">Por: {selectedRoutine.usuario.nombre}</p>
            <p className="text-gray-300 mb-4">{selectedRoutine.descripcion}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg">❤️</span>
              <span className="text-white">{selectedRoutine.likes.length} Me gusta</span>
            </div>
            {/* Puedes agregar más detalles aquí si tuvieras más campos */}
          </div>
        </div>
      )}
    </div>
  );
}
