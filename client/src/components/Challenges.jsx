import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAchievements, setUserAchievements] = useState([]);
  const [userChallenges, setUserChallenges] = useState([]);
  const [activeTab, setActiveTab] = useState('active'); 
  const [error, setError] = useState(null);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressModalValue, setProgressModalValue] = useState(0);
  const [progressModalChallenge, setProgressModalChallenge] = useState(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const [deletingChallengeId, setDeletingChallengeId] = useState(null);
  
  // Función utilitaria para obtener el usuario actual de localStorage
  const getCurrentUser = () => {
    const id = localStorage.getItem('usuarioId');
    const token = localStorage.getItem('userToken');
    const nombre = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    
    if (id && token) {
      return {
        id,
        token,
        nombre,
        email
      };
    }
    return null;  
  };
  
  // Helper para proporcionar encabezados de autenticación para llamadas API
  const apiConfig = () => {
    const token = localStorage.getItem('userToken');
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token || ''}`
      }
    };
  };
  
  useEffect(() => {
    fetchData();
  }, [activeTab]);
  
  // Función principal para cargar datos de retos según la pestaña activa
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const currentUser = getCurrentUser();
    
    try {
      if (activeTab === 'active') {
        await fetchActiveChallenges(); 
      } else if (activeTab === 'joined') {
        if (currentUser?.id) {
          await fetchUserChallenges(currentUser.id);
        } else {
          setError("Inicia sesión para ver tus retos. Parece que tu sesión ha expirado.");
          setUserChallenges([]);
        }
      } else if (activeTab === 'completed') {
        if (currentUser?.id) {
          await fetchCompletedChallenges(currentUser.id);
        } else {
          setError("Inicia sesión para ver tus retos completados. Parece que tu sesión ha expirado.");
          setChallenges([]);
        }
      }
      
      if (currentUser?.id) { 
        await fetchUserAchievements();
      } else {
        console.log("No hay sesión activa, no se cargarán logros");
      }
    } catch (err) {
      console.error('Error al cargar datos:', err);
      setError('Hubo un problema al cargar los datos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };
  
  // Cargar retos activos disponibles para unirse
  const fetchActiveChallenges = async () => {
    try {
      console.log('Intentando obtener retos activos...');
      
      try {
        await axios.get('http://localhost:5000');
        console.log('Servidor principal accesible');
      } catch (serverError) {
        console.warn('No se pudo acceder al servidor principal:', serverError.message);
      }
      
      const response = await axios.get('http://localhost:5000/api/challenges/active');
      console.log('Respuesta recibida:', response.data);
      
      if (response.data && Array.isArray(response.data)) {
        setChallenges(response.data);
        console.log('Retos cargados:', response.data.length);
      } else {
        console.error('La respuesta no es un array:', response.data);
        setChallenges([]);
        setError('La respuesta del servidor no tiene el formato esperado');
      }
      
      try {
        const currentUser = getCurrentUser();
        if (currentUser?.id) { 
          const userResponse = await axios.get(`http://localhost:5000/api/challenges/user/${currentUser.id}`, apiConfig());
          console.log('Retos del usuario:', userResponse.data);
          setUserChallenges(userResponse.data);
        } else {
          setUserChallenges([]); 
        }
      } catch (userError) {
        console.warn('Error al obtener retos del usuario:', userError.message);
        setUserChallenges([]);
      }
    } catch (error) {
      console.error('Error detallado al conectar con la API:', error);
      
      if (error.response) {
        console.log('Datos de respuesta de error:', error.response.data);
        console.log('Estado HTTP:', error.response.status);
        
        setError(`Error del servidor (${error.response.status}): La ruta no está disponible o no está configurada correctamente.`);
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor');
        setError('No se recibió respuesta del servidor. Asegúrate de que el servidor esté en funcionamiento.');
      } else {
        console.log('Error al configurar la petición:', error.message);
        setError(`Error al realizar la petición: ${error.message}`);
      }
      
      setChallenges([]);
    }
  };
  
  // Cargar retos en los que el usuario actual está participando
  const fetchUserChallenges = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/challenges/user/${userId}`, apiConfig());
      setUserChallenges(response.data);
    } catch (error) {
      console.error('Error al obtener retos del usuario:', error);
      setError('Error al cargar tus retos. Posiblemente necesites iniciar sesión.');
      setUserChallenges([]);
    }
  };
  
  const fetchCompletedChallenges = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/challenges/completed/${userId}`, apiConfig());
      setChallenges(response.data);

      setUserAchievements(calculateAchievements(response.data));
    } catch (error) {
      console.error('Error al obtener retos completados:', error);
      setError('Error al cargar retos completados. Posiblemente necesites iniciar sesión.');
      setChallenges([]);
      setUserAchievements([]);
    }
  };
  
  const calculateAchievements = (completedChallenges) => {
    const achievements = [];
    if (!completedChallenges || completedChallenges.length === 0) return achievements;

    if (completedChallenges.length >= 1) {
      achievements.push({
        id: 'first-challenge',
        titulo: '¡Primer reto completado!',
        descripcion: 'Has completado tu primer reto.',
        icono: '🏅',
        fechaConseguido: completedChallenges[0].ultimoProgreso || new Date(),
      });
    }

    if (completedChallenges.length >= 5) {
      achievements.push({
        id: 'five-challenges',
        titulo: '¡Cinco retos completados!',
        descripcion: 'Has completado 5 retos.',
        icono: '🥇',
        fechaConseguido: completedChallenges[4].ultimoProgreso || new Date(),
      });
    }

    const categoryCount = {};
    completedChallenges.forEach((uc) => {
      const tipo = uc.challenge?.tipo || 'Otro';
      categoryCount[tipo] = (categoryCount[tipo] || 0) + 1;
    });
    Object.entries(categoryCount).forEach(([tipo, count]) => {
      if (count >= 5) {
        achievements.push({
          id: `five-${tipo}`,
          titulo: `¡Cinco retos de ${tipo}!`,
          descripcion: `Has completado 5 retos de la categoría "${tipo}".`,
          icono: '🏆',
          fechaConseguido:
            completedChallenges
              .filter(uc => (uc.challenge?.tipo || 'Otro') === tipo)[4]?.ultimoProgreso || new Date(),
        });
      }
    });

    return achievements;
  };
  
  const fetchUserAchievements = async () => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) {
        setUserAchievements([]);
        return;
      }
      const response = await axios.get(`http://localhost:5000/api/challenges/achievements/${currentUser.id}`, apiConfig());
      setUserAchievements(response.data);
    } catch (error) {
      console.error('Error al obtener logros:', error);
      setUserAchievements([]);
    }
  };
  
  // Función para unirse a un nuevo reto
  const joinChallenge = async (challengeId) => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) {
        alert("Debes iniciar sesión para unirte a un reto. Tu sesión puede haber expirado.");
        return;
      }

      const originalChallenges = [...challenges]; 
      setChallenges(challenges.filter(c => c.id !== challengeId)); 
    
      const response = await axios.post('http://localhost:5000/api/challenges/join', 
        { challengeId, userId: currentUser.id }, 
        apiConfig()
      );
      
      if (response.data && response.data.userChallenge) {
        setUserChallenges(prevChallenges => [...prevChallenges, response.data.userChallenge]);
        
        alert(`Te has unido al reto "${response.data.userChallenge.titulo}" con éxito`);
        
        setActiveTab('joined');
        
        if (activeChallenge && activeChallenge.id === challengeId) {
          setActiveChallenge(null); 
        }
      } else {
        setChallenges(originalChallenges);
        alert('Te has unido al reto con éxito');
      }
    } catch (err) {
      console.error('Error al unirse al reto:', err);
      
      // Mostrar mensaje de error específico si el servidor lo proporciona
      if (err.response && err.response.data) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert('Hubo un problema al unirse al reto. Inténtalo de nuevo.');
      }
    }
  };
  
  // Actualizar el progreso de un reto en el que el usuario está trabajando
  const updateProgress = async (challengeId, newProgress) => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) {
        alert("Debes iniciar sesión para actualizar el progreso.");
        return;
      }

      await axios.put('http://localhost:5000/api/challenges/progress', 
        { 
          challengeId, 
          progreso: newProgress,
          userId: currentUser.id
        }, 
        apiConfig()
      );

      await fetchUserChallenges(currentUser.id);

      if (newProgress === 100) {
        alert('¡Felicidades! Has completado el reto');
        if (activeTab === 'completed') {
          await fetchCompletedChallenges(currentUser.id);
        }
      }
    } catch (err) {
      console.error('Error al actualizar progreso:', err);
      alert('Hubo un problema al actualizar el progreso. Inténtalo de nuevo.');
    }
  };

  // Manejar la interacción de UI para actualizar el progreso del reto
  const updateProgressUI = (challengeId) => {
    const challenge = userChallenges.find(c => c.challengeId === challengeId);
    if (!challenge) return;
    setProgressModalChallenge(challenge);
    setProgressModalValue(challenge.progreso);
    setShowProgressModal(true);
  };

  const handleProgressModalSave = () => {
    if (
      isNaN(progressModalValue) ||
      progressModalValue < 0 ||
      progressModalValue > 100
    ) {
      alert('Por favor ingresa un número válido entre 0 y 100');
      return;
    }
    updateProgress(progressModalChallenge.challengeId, parseInt(progressModalValue));
    setShowProgressModal(false);
  };

  // Función para eliminar un reto completado del historial
  const deleteCompletedChallenge = async (challengeId) => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) {
        alert("Debes iniciar sesión para eliminar un reto. Tu sesión puede haber expirado.");
        return;
      }

      setDeletingChallengeId(challengeId);
      setDeleteConfirmModal(true);
    } catch (err) {
      console.error('Error al preparar la eliminación del reto:', err);
      alert('Hubo un problema al intentar eliminar el reto. Inténtalo de nuevo.');
    }
  };
  
  // Función para confirmar la eliminación de un reto completado
  const confirmDeleteChallenge = async () => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id || !deletingChallengeId) {
        setDeleteConfirmModal(false);
        return;
      }

      // Fix the API endpoint URL structure to match the server's route pattern
      await axios.delete(`http://localhost:5000/api/challenges/delete/${currentUser.id}/${deletingChallengeId}`, apiConfig());
      
      // Actualizar la lista de retos completados
      if (activeTab === 'completed') {
        setChallenges(prev => prev.filter(challenge => challenge.challengeId !== deletingChallengeId));
      }
      
      alert('Reto eliminado con éxito');
      setDeleteConfirmModal(false);
      
      // Refrescar la lista de retos completados
      if (activeTab === 'completed') {
        await fetchCompletedChallenges(currentUser.id);
      }
    } catch (err) {
      console.error('Error al eliminar el reto:', err);
      alert('Hubo un problema al eliminar el reto. Inténtalo de nuevo.');
      setDeleteConfirmModal(false);
    }
  };
  
  // Función para iniciar el proceso de abandono de un reto en curso
  const abandonChallenge = async (challengeId) => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) {
        alert("Debes iniciar sesión para abandonar un reto. Tu sesión puede haber expirado.");
        return;
      }

      // Guardar el ID del reto a abandonar y mostrar el modal de confirmación
      setDeletingChallengeId(challengeId);
      setDeleteConfirmModal(true);
    } catch (err) {
      console.error('Error al preparar el abandono del reto:', err);
      alert('Hubo un problema al intentar abandonar el reto. Inténtalo de nuevo.');
    }
  };
  
  // Manejar la confirmación del abandono del reto
  const confirmAbandonChallenge = async () => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id || !deletingChallengeId) {
        setDeleteConfirmModal(false);
        return;
      }

      // Llamar a la API para abandonar el reto
      await axios.post(`http://localhost:5000/api/challenges/abandon`, {
        userId: currentUser.id,
        challengeId: deletingChallengeId
      }, apiConfig());
      
      // Actualizar la UI eliminando el reto abandonado
      if (activeTab === 'joined') {
        setUserChallenges(prev => prev.filter(uc => uc.challengeId !== deletingChallengeId));
      }
      
      alert('Has abandonado el reto');
      setDeleteConfirmModal(false);
      
      // Recargar datos para mostrar listas actualizadas
      await fetchData();
    } catch (err) {
      console.error('Error al abandonar el reto:', err);
      alert('Hubo un problema al abandonar el reto. Inténtalo de nuevo.');
      setDeleteConfirmModal(false);
    }
  };
  
  const renderChallengesList = () => {
    console.log('Renderizando lista de retos. Retos disponibles:', challenges.length);
    console.log('Retos del usuario (userChallenges):', userChallenges.length);
    
    let displayChallenges = [];
    
    if (activeTab === 'active') {
      displayChallenges = challenges.filter(challenge => 
        challenge.activo && !userChallenges.some(uc => uc.challengeId === challenge.id) 
      );
      console.log('Retos activos filtrados para mostrar:', displayChallenges.length);
    } else if (activeTab === 'joined') {
      displayChallenges = userChallenges.filter(uc => 
        !uc.completado && new Date(uc.challenge.fechaFin) >= new Date()
      ).map(uc => ({...uc.challenge, progreso: uc.progreso, userChallengeId: uc.id })); 
      console.log('Retos participantes filtrados para mostrar:', displayChallenges.length);
    } else if (activeTab === 'completed') {
      displayChallenges = challenges.map(uc => ({...uc.challenge, progreso: uc.progreso, userChallengeId: uc.id, challengeId: uc.challengeId }));
      console.log('Retos completados filtrados para mostrar:', displayChallenges.length);
    }

    if (displayChallenges.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-400">
            {activeTab === 'active' 
              ? 'No hay retos activos disponibles en este momento.' 
              : activeTab === 'joined'
                ? 'No estás participando en ningún reto actualmente.'
                : 'No has completado ningún reto todavía.'}
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayChallenges.map((challenge) => (
          <div 
            key={challenge.id} 
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 cursor-pointer"
            onClick={() => setActiveChallenge(challenge)}
          >
            <div className="flex justify-between mb-2">
              <span className={`text-xs px-2 py-1 rounded ${
                challenge.tipo === 'Fuerza' ? 'bg-red-900 text-red-200' :
                challenge.tipo === 'Cardio' ? 'bg-green-900 text-green-200' :
                challenge.tipo === 'Flexibilidad' ? 'bg-purple-900 text-purple-200' :
                challenge.tipo === 'Core' ? 'bg-yellow-900 text-yellow-200' :
                challenge.tipo === 'Resistencia' ? 'bg-orange-900 text-orange-200' :
                challenge.tipo === 'Yoga' ? 'bg-teal-900 text-teal-200' :
                'bg-blue-900 text-blue-200'
              }`}>
                {challenge.tipo}
              </span>
              <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                {challenge.nivel}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{challenge.titulo}</h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{challenge.descripcion}</p>
            
            {activeTab === 'joined' && challenge.progreso !== undefined && (
              <div className="mb-3">
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600"
                    style={{ width: `${challenge.progreso}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>Progreso</span>
                  <span>{challenge.progreso}%</span>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-yellow-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span>{challenge.participantes}</span>
              </div>
              
              {activeTab === 'active' && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    joinChallenge(challenge.id);
                  }}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Participar
                </button>
              )}
              
              {activeTab === 'joined' && (
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-400">
                    {new Date(challenge.fechaFin).toLocaleDateString()}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      abandonChallenge(challenge.challengeId);
                    }}
                    className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700"
                    title="Abandonar reto"
                  >
                    Abandonar
                  </button>
                </div>
              )}
              
              {activeTab === 'completed' && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCompletedChallenge(challenge.challengeId);
                  }}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Eliminar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const isLoggedIn = !!getCurrentUser(); 
  
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
              Necesitas iniciar sesión para acceder a los retos. Por favor, inicia sesión o regístrate para continuar.
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
      <div className="text-center py-10">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-white">Cargando retos...</p>
      </div>
    );
  }
  
  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Retos y Logros</h1>
          <div className="flex gap-2">
            {/* Botón de recarga */}
            <button
              onClick={fetchData}
              className="px-3 py-1 rounded text-sm bg-gray-700 text-gray-300 hover:bg-gray-600 mr-2"
              title="Recargar datos"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            {/* Pestañas existentes */}
            <button 
              className={`px-3 py-1 rounded text-sm ${
                activeTab === 'active' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab('active')}
            >
              Retos disponibles
            </button>
            <button 
              className={`px-3 py-1 rounded text-sm ${
                activeTab === 'joined' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab('joined')}
            >
              Mis retos
            </button>
            <button 
              className={`px-3 py-1 rounded text-sm ${
                activeTab === 'completed' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Completados
            </button>
          </div>
        </div>
        
        {/* Mensaje de error más destacado */}
        {error && (
          <div className="mb-8 bg-red-900 text-white p-4 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{error}</span>
            </div>
            <button 
              onClick={() => setError(null)}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {activeTab === 'active' ? 'Retos Disponibles' :
                 activeTab === 'joined' ? 'Mis Retos Activos' : 
                 'Retos Completados'}
              </h2>
              
              {loading ? (
                <div className="text-center py-10">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  <p className="mt-2 text-white">Cargando retos...</p>
                </div>
              ) : (
                renderChallengesList()
              )}
            </div>
            
            {activeChallenge && (
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{activeChallenge.titulo}</h2>
                  <button 
                    onClick={() => setActiveChallenge(null)}
                    className="text-gray-400 hover:text-white bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
                  >
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${
                    activeChallenge.tipo === 'Fuerza' ? 'bg-red-900 text-red-200' :
                    activeChallenge.tipo === 'Cardio' ? 'bg-green-900 text-green-200' :
                    activeChallenge.tipo === 'Flexibilidad' ? 'bg-purple-900 text-purple-200' :
                    activeChallenge.tipo === 'Core' ? 'bg-yellow-900 text-yellow-200' :
                    activeChallenge.tipo === 'Resistencia' ? 'bg-orange-900 text-orange-200' :
                    activeChallenge.tipo === 'Yoga' ? 'bg-teal-900 text-teal-200' :
                    'bg-blue-900 text-blue-200'
                  }`}>
                    {activeChallenge.tipo}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                    {activeChallenge.nivel}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-yellow-900 text-yellow-200">
                    {activeChallenge.participantes} participantes
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{activeChallenge.descripcion}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-gray-400 text-sm">Inicio</p>
                    <p className="text-white">{new Date(activeChallenge.fechaInicio).toLocaleDateString()}</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-gray-400 text-sm">Fin</p>
                    <p className="text-white">{new Date(activeChallenge.fechaFin).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Objetivos:</h3>
                  <ul className="space-y-2">
                    {activeChallenge.objetivos && Array.isArray(activeChallenge.objetivos) && activeChallenge.objetivos.map((obj, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-300">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Recompensa:</h3>
                  <p className="text-gray-300">{activeChallenge.recompensa}</p>
                </div>
                
                {activeChallenge.progreso === undefined && !userChallenges.some(uc => uc.challengeId === activeChallenge.id) ? (
                  <button 
                    onClick={() => joinChallenge(activeChallenge.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Unirse al Reto
                  </button>
                ) : (
                  <div className="text-center py-3 bg-gray-800 rounded-md">
                    <p className="text-green-400 font-medium">Ya estás participando en este reto</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Mi Progreso</h2>
              
              {userChallenges.length > 0 ? (
                <div className="space-y-4">
                  {userChallenges
                    .filter(uc => !uc.completado && new Date(uc.challenge.fechaFin) >= new Date())
                    .map(userChallengeItem => (
                      <div key={userChallengeItem.id} className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{userChallengeItem.challenge.titulo}</h3>
                        <div className="mb-2">
                          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600"
                              style={{ width: `${userChallengeItem.progreso}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-gray-400">
                            <span>Progreso</span>
                            <span>{userChallengeItem.progreso}%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-400">
                            Finaliza: {new Date(userChallengeItem.challenge.fechaFin).toLocaleDateString()}
                          </div>
                          <button
                            onClick={() => updateProgressUI(userChallengeItem.challengeId)}
                            className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            Actualizar progreso
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-4">
                  No estás participando en ningún reto actualmente.
                </p>
              )}
            </div>
            
            <div className="bg-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Mis Logros</h2>
              
              {userAchievements.length > 0 ? (
                <div className="space-y-4">
                  {userAchievements.map((achievement, idx) => (
                    <div key={achievement.id || idx} className="bg-gray-800 rounded-lg p-4 flex items-start">
                      <div className="text-3xl mr-3">{achievement.icono}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{achievement.titulo}</h3>
                        <p className="text-gray-400 text-sm mb-1">{achievement.descripcion}</p>
                        <p className="text-gray-500 text-xs">
                          Conseguido: {achievement.fechaConseguido ? new Date(achievement.fechaConseguido).toLocaleDateString() : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-4">
                  Aún no has conseguido ningún logro. ¡Participa en retos para desbloquearlos!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal para actualizar progreso - change background color to match */}
      {showProgressModal && progressModalChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-xs">
            <h3 className="text-lg font-bold text-white mb-4">
              Actualizar progreso
            </h3>
            <p className="text-gray-300 mb-2">
              {progressModalChallenge.challenge.titulo}
            </p>
            <div className="mb-4">
              <input
                type="range"
                min={0}
                max={100}
                value={progressModalValue}
                onChange={e => setProgressModalValue(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0%</span>
                <span>100%</span>
              </div>
              <div className="text-center text-blue-400 font-bold text-lg mt-2">
                {progressModalValue}%
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <button
                onClick={() => setShowProgressModal(false)}
                className="flex-1 py-2 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleProgressModalSave}
                className="flex-1 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal de confirmación de eliminación/abandono */}
      {deleteConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-lg font-bold text-white mb-4">
              {activeTab === 'completed' ? 'Confirmar eliminación' : 'Confirmar abandono'}
            </h3>
            <p className="text-gray-300 mb-6">
              {activeTab === 'completed' 
                ? '¿Estás seguro de que deseas eliminar este reto de tu historial? Esta acción no puede deshacerse.'
                : '¿Estás seguro de que deseas abandonar este reto? Perderás todo tu progreso actual.'}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteConfirmModal(false)}
                className="py-2 px-4 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
              <button
                onClick={activeTab === 'completed' ? confirmDeleteChallenge : confirmAbandonChallenge}
                className={`py-2 px-4 rounded ${
                  activeTab === 'completed' 
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-yellow-600 hover:bg-yellow-700'
                } text-white transition`}
              >
                {activeTab === 'completed' ? 'Eliminar' : 'Abandonar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
