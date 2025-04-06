// src/Rutinas.jsx
import React, { useEffect, useState } from 'react';

const Rutinas = () => {
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/rutinas')
      .then(response => response.json())
      .then(data => setRutinas(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rutinas de Ejercicio</h1>
      <ul className="list-disc pl-5 space-y-2">
        {rutinas.map(rutina => (
          <li key={rutina.id} className="text-gray-700">
            {rutina.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rutinas;
