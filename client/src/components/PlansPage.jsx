import { useState, useEffect } from 'react';

export default function PlansPage() {
  const [planInfo, setPlanInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanInfo = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user || !user.id) {
          setError('Usuario no encontrado. Por favor, inicia sesión.');
          setLoading(false);
          return;
        }
        
        const response = await fetch(`http://localhost:5000/api/user-plan/${user.id}`);
        
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

  const handlePlanChange = async (newPlan) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      
      if (!user || !user.id) {
        setError('Usuario no encontrado. Por favor, inicia sesión.');
        return;
      }
      
      // Cambiar la URL de /api/update-plan a /api/user-plan
      const response = await fetch('http://localhost:5000/api/user-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          newPlan
        })
      });

      if (!response.ok) {
        const errorData = await response.json(); // Intentar obtener más detalles del error
        throw new Error(`Error: ${response.status} - ${errorData.message || response.statusText}`);
      }

      const updatedPlanInfo = await response.json(); // La API ahora devuelve el plan actualizado
      // Actualizar el estado local con la información completa devuelta por la API
      setPlanInfo(updatedPlanInfo); 
      alert(`Plan cambiado a ${newPlan.toUpperCase()} con éxito`);
    } catch (error) {
      console.error('Error al actualizar el plan:', error);
      setError(`Error al actualizar el plan: ${error.message}. Por favor, intenta de nuevo.`);
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-800 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center">Cargando información del plan...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-800 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-800 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">Nuestros Planes</h2>
        {planInfo && (
          <div className="text-center mb-8 text-white">
            <p>Plan actual: {planInfo.plan.toUpperCase()}</p>
            <p>Rutinas creadas: {planInfo.rutinasCreadas} de {planInfo.limite === Infinity ? '∞' : planInfo.limite}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Gratis */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Gratis</h3>
            <p className="text-gray-300 mb-6">Crea hasta 10 rutinas</p>
            <p className="text-4xl font-extrabold text-white mb-6">$0</p>
            <button 
              onClick={() => handlePlanChange('free')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </button>
          </div>

          {/* Plan Básico */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
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
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
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
      </div>
    </section>
  );
}