import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Verificar si el usuario está autenticado según localStorage
  const isLoggedIn = !!localStorage.getItem('usuarioId');
  
  // Efectuar verificación de sesión al montar el componente
  useEffect(() => {
    const checkSession = () => {
      // Obtener datos de autenticación de localStorage
      const usuarioId = localStorage.getItem('usuarioId');
      const userToken = localStorage.getItem('userToken');
      
      // Si falta alguna información de autenticación, limpiar todos los datos de sesión
      if (!usuarioId || !userToken) {
        localStorage.removeItem('usuarioId');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPlanInfo');
        localStorage.removeItem('viewRutinaDetails');
      }
    };
    
    checkSession();
  }, []);

  // Si no hay sesión iniciada, mostrar pantalla de acceso restringido
  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center py-16">
          <div className="bg-gray-800/80 rounded-lg p-8 max-w-2xl mx-auto shadow-xl backdrop-blur">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-24 w-24 text-red-500 mx-auto mb-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-3a3 3 0 100-6 3 3 0 000 6zm-7.75 9.25a8.5 8.5 0 1117.5 0" 
              />
            </svg>
            <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
            <p className="text-lg text-gray-300 mb-8">
              Necesitas iniciar sesión para acceder a este contenido. Por favor, inicia sesión o regístrate para continuar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all text-lg font-medium"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register" 
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition-all text-lg font-medium"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Si hay sesión iniciada, renderizar el contenido protegido (children)
  return children;
};

export default ProtectedRoute;
