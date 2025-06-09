import React, { useState } from 'react';
import axios from 'axios';

const AddEjercicio = ({ onSubmitSuccess, onCancel }) => {
  // Estados para manejar el formulario y su envío
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Obtener ID de usuario del almacenamiento local
      const usuarioId = localStorage.getItem('usuarioId');
      if (!usuarioId) {
        throw new Error('No se encontró el ID de usuario. Por favor, inicia sesión nuevamente.');
      }

      // Crear FormData para enviar la información
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('categoria', categoria);
      formData.append('usuarioId', usuarioId); 
      
      // Enviar solicitud al servidor
      const response = await axios.post('/api/ejercicios', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const nuevoEjercicio = response.data;
      
      // Verificar si el ejercicio se creó como común en lugar de personalizado
      if (nuevoEjercicio.esComun) {
        console.warn('Advertencia: El API ha creado un ejercicio común en lugar de personalizado');
      }
    
      // Notificar éxito al componente padre
      onSubmitSuccess(nuevoEjercicio);
      
      // Limpiar el formulario
      setNombre('');
      setDescripcion('');
      setCategoria('');
    } catch (err) {
      console.error('Error al añadir ejercicio:', err);
      setError('Error al crear el ejercicio personalizado: ' + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Añadir Nuevo Ejercicio Personalizado
        </h2>
        {/* Botón de cancelar - solo se muestra si se proporciona la función onCancel */}
        {onCancel && (
          <button
            onClick={onCancel}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md flex items-center text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Cancelar
          </button>
        )}
      </div>
      
      {/* Mostrar mensajes de error si ocurren */}
      {error && (
        <div className="mb-6 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md">
          {error}
        </div>
      )}
      
      {/* Formulario para añadir ejercicio */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Campo para nombre del ejercicio */}
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
          {/* Campo para categoría del ejercicio */}
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
        {/* Campo para la descripción del ejercicio */}
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
        {/* Botón de envío con estados de carga */}
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:opacity-70 text-white px-6 py-3 rounded-md shadow-md transition-colors flex items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Añadiendo...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Añadir Ejercicio Personalizado
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEjercicio;
