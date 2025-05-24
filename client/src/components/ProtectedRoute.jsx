import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('usuarioId');
  
  useEffect(() => {
    // Verificar que el token sea válido
    const checkSession = () => {
      const usuarioId = localStorage.getItem('usuarioId');
      const userToken = localStorage.getItem('userToken');
      
      // Si no hay ID o token, la sesión no es válida
      if (!usuarioId || !userToken) {
        // Limpiar cualquier dato residual
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

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
