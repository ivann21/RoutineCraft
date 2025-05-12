import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));
  const [ejercicioEditando, setEjercicioEditando] = useState(null);

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
      formData.append('imagen', imagen);
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
      setImagen(null);
    } catch (error) {
      console.error('Error al añadir el ejercicio:', error);
    }
  };

  const handleEditEjercicio = (ejercicio) => {
    setEjercicioEditando(ejercicio);
    setNombre(ejercicio.nombre);
    setDescripcion(ejercicio.descripcion);
    setCategoria(ejercicio.categoria);
    setImagen(null); // No se puede previsualizar la imagen actual
  };

  const handleUpdateEjercicio = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('categoria', categoria);
      if (imagen) formData.append('imagen', imagen);

      await axios.put(`/api/ejercicios/${ejercicioEditando.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setEjercicios((prevEjercicios) =>
        prevEjercicios.map((ej) =>
          ej.id === ejercicioEditando.id
            ? { ...ej, nombre, descripcion, categoria, imagen: imagen ? URL.createObjectURL(imagen) : ej.imagen }
            : ej
        )
      );

      setEjercicioEditando(null);
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setImagen(null);
    } catch (error) {
      console.error('Error al actualizar el ejercicio:', error);
    }
  };

  const handleDeleteEjercicio = async (id) => {
    try {
      await axios.delete(`/api/ejercicios/${id}`);
      setEjercicios(ejercicios.filter((ejercicio) => ejercicio.id !== id));
    } catch (error) {
      console.error('Error al eliminar el ejercicio:', error);
    }
  };

  const handleCancelEdit = () => {
    setEjercicioEditando(null);
    setNombre('');
    setDescripcion('');
    setCategoria('');
    setImagen(null);
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
          <div>
            <label className="block text-white mb-2">Imagen</label>
            <input
              type="file"
              onChange={(e) => setImagen(e.target.files[0])}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
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
        {ejercicios.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">No tienes ejercicios aún. ¡Empieza a crear uno!</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ejercicios.map((ejercicio) => (
              <li
                key={ejercicio.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-white">{ejercicio.nombre}</h2>
                <p className="text-gray-400 mt-2">{ejercicio.descripcion || "Sin descripción"}</p>
                <p className="text-gray-400 mt-2">Categoría: {ejercicio.categoria || "Sin categoría"}</p>
                {ejercicio.imagen && (
                  <img
                    src={ejercicio.imagen}
                    alt={ejercicio.nombre}
                    className="mt-4 rounded-md"
                  />
                )}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEditEjercicio(ejercicio)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteEjercicio(ejercicio.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Ejercicios;
