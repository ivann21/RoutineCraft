import { useState, useEffect } from 'react';

export default function PlansPage() {
  const [planInfo, setPlanInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId'));

  const handlePlanChange = async (newPlan) => {
    try {
      // Primero verificamos si el usuario está autenticado
      const usuarioId = localStorage.getItem('usuarioId');
      
      if (!usuarioId) {
        setError('Usuario no encontrado. Por favor, inicia sesión.');
        return;
      }
      
      setLoading(true);
      setError(null);
      
      // Realizamos la solicitud para actualizar el plan
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

      // Leemos la respuesta como texto primero para evitar errores
      const responseText = await response.text();
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseText || response.statusText}`);
      }
      
      // Si la respuesta es JSON válido, la parseamos
      let updatedPlanInfo;
      try {
        updatedPlanInfo = JSON.parse(responseText);
      } catch {
        throw new Error('Respuesta del servidor no es JSON válido');
      }
      
      // Actualizamos el estado con la nueva información
      setPlanInfo(updatedPlanInfo);
      alert(`Plan cambiado a ${newPlan.toUpperCase()} con éxito`);
    } catch (error) {
      console.error('Error al actualizar el plan:', error);
      setError(`Error al actualizar el plan: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPlanInfo = async () => {
      try {
        setLoading(true);
        // Obtenemos el ID del usuario desde localStorage
        const usuarioId = localStorage.getItem('usuarioId');
        
        if (!usuarioId) {
          setError('Usuario no encontrado. Por favor, inicia sesión.');
          setLoading(false);
          return;
        }
        
        // Realizamos la solicitud para obtener la información del plan
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

  useEffect(() => {
    // Verificar autenticación al cargar
    const checkAuth = () => {
      const userId = localStorage.getItem('usuarioId');
      setIsLoggedIn(!!userId);
    };
    
    checkAuth();
    
    // Escuchar eventos de storage
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Manejar el caso de no autenticado
  if (!isLoggedIn) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Acceso Restringido</h1>
          <p className="text-lg text-gray-300 mb-4">Por favor, regístrate o inicia sesión para acceder a nuestros planes.</p>
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