import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PlansPage() {
  // Estados para manejar la información de planes y UI
  const [planInfo, setPlanInfo] = useState(null);         // Información del plan actual
  const [loading, setLoading] = useState(true);           // Estado de carga
  const [error, setError] = useState(null);               // Mensajes de error
  const [showLimitModal, setShowLimitModal] = useState(false); // Control del modal de límite
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId')); // Estado de autenticación

  // Función para cambiar de plan
  const handlePlanChange = async (newPlan) => {
    try {
      const usuarioId = localStorage.getItem('usuarioId');
      
      // Verificar que el usuario está autenticado
      if (!usuarioId) {
        setError('Usuario no encontrado. Por favor, inicia sesión.');
        return;
      }
      
      setLoading(true);
      setError(null);
      
      // Enviar solicitud para actualizar el plan
      const response = await fetch('http://localhost:5000/api/user-plan/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId),
          newPlan
        })
      });

      const responseText = await response.text();
      
      // Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseText || response.statusText}`);
      }
      
      // Parsear la respuesta JSON
      let updatedPlanInfo;
      try {
        updatedPlanInfo = JSON.parse(responseText);
      } catch {
        throw new Error('Respuesta del servidor no es JSON válido');
      }
      
      // Actualizar estado con la nueva información del plan
      setPlanInfo(updatedPlanInfo);
      alert(`Plan cambiado a ${newPlan.toUpperCase()} con éxito`);
    } catch (error) {
      console.error('Error al actualizar el plan:', error);
      setError(`Error al actualizar el plan: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar información del plan al montar componente
  useEffect(() => {
    const fetchPlanInfo = async () => {
      try {
        setLoading(true);
        const usuarioId = localStorage.getItem('usuarioId');
        
        // Verificar que el usuario está autenticado
        if (!usuarioId) {
          setError('Usuario no encontrado. Por favor, inicia sesión.');
          setLoading(false);
          return;
        }
        
        // Obtener información del plan actual
        const response = await fetch(`http://localhost:5000/api/user-plan/${usuarioId}`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setPlanInfo(data);
        setError(null);
      } catch (error) {
        console.error('Error al obtener información del plan:', error);
        setError('Error al cargar la información del plan. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlanInfo();
  }, []);

  // Efecto para verificar estado de autenticación
  useEffect(() => {
    const checkAuth = () => {
      const userId = localStorage.getItem('usuarioId');
      setIsLoggedIn(!!userId);
    };
    
    checkAuth();
    
    // Escuchar eventos de cambios en localStorage
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Limpieza al desmontar componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Reemplazar el renderizado para usuarios no autenticados
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
              Necesitas iniciar sesión para acceder a los planes. Por favor, inicia sesión o regístrate para continuar.
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

  if (loading) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <p className="text-white text-center">Cargando información del plan...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Nuestros Planes</h2>
        {planInfo && (
          <div className="text-center mb-8 text-white">
            <p>Plan actual: {planInfo.plan.toUpperCase()}</p>
            {planInfo.plan !== 'premium' && (
              <p>Rutinas creadas: {planInfo.rutinasCreadas} de {planInfo.limite} rutinas</p>
            )}
            {planInfo.plan === 'premium' && (
              <p>Rutinas ilimitadas disponibles</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Gratis */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Gratis</h3>
            <p className="text-gray-300 mb-6">Crea hasta 5 rutinas</p>  {/* Cambiado de 10 a 5 */}
            <p className="text-4xl font-extrabold text-white mb-6">$0</p>
            <button 
              onClick={() => handlePlanChange('free')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </button>
          </div>

          {/* Plan Básico */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Básico</h3>
            <p className="text-gray-300 mb-6">Crea hasta 50 rutinas</p>
            <p className="text-4xl font-extrabold text-white mb-6">€5/mes</p>
            <button 
              onClick={() => handlePlanChange('basic')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Premium</h3>
            <p className="text-gray-300 mb-6">Rutinas ilimitadas</p>
            <p className="text-4xl font-extrabold text-white mb-6">€10/mes</p>
            <button 
              onClick={() => handlePlanChange('premium')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </button>
          </div>
        </div>

        {/* Plan Limit Modal */}
        {showLimitModal && planInfo && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Límite de rutinas alcanzado</h3>
              <p className="text-gray-300 mb-6">
                Has alcanzado el límite de {planInfo.limite} rutinas de tu plan {planInfo.plan.toUpperCase()}.
                Para crear más rutinas, actualiza tu plan a uno de nivel superior.
              </p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowLimitModal(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}