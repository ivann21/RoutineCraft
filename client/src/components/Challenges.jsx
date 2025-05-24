import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAchievements, setUserAchievements] = useState([]);
  const [userChallenges, setUserChallenges] = useState([]);
  const [activeTab, setActiveTab] = useState('active'); // 'active', 'joined', 'completed'
  const [error, setError] = useState(null);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressModalValue, setProgressModalValue] = useState(0);
  const [progressModalChallenge, setProgressModalChallenge] = useState(null);
  
  // Obtener el token de autenticación y el ID del usuario
  const getCurrentUser = () => {
    // Usar las mismas claves de localStorage que en Login.jsx
    const id = localStorage.getItem('usuarioId');
    const token = localStorage.getItem('userToken');
    const nombre = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    
    // Verificar si existe el ID y token para determinar si hay sesión
    if (id && token) {
      return {
        id,
        token,
        nombre,
        email
      };
    }
    return null;  // Retornar null en vez de objeto vacío para facilitar validación
  };
  
  // Configuración para las peticiones a la API
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
  
  // Modificar la función fetchData para una mejor validación de sesión
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const currentUser = getCurrentUser();
    
    try {
      // Cargar diferentes datos según la pestaña activa
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
          setChallenges([]); // Asegúrate de limpiar los retos si no hay usuario
        }
      }
      
      // Cargar logros del usuario en cualquier caso si el usuario está autenticado
      if (currentUser?.id) { // Usar el operador de encadenamiento opcional
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
  
  // Modificar la función fetchActiveChallenges para manejar mejor la sesión
  const fetchActiveChallenges = async () => {
    try {
      console.log('Intentando obtener retos activos...');
      
      // Verificar primero si el servidor está accesible
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
      
      // También necesitamos los retos del usuario para filtrar los que ya participa
      try {
        const currentUser = getCurrentUser();
        if (currentUser?.id) { // Usar validación más robusta
          const userResponse = await axios.get(`http://localhost:5000/api/challenges/user/${currentUser.id}`, apiConfig());
          console.log('Retos del usuario:', userResponse.data);
          setUserChallenges(userResponse.data);
        } else {
          setUserChallenges([]); // No hay usuario, no hay retos de usuario
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

      // Calcular logros locales al cargar retos completados
      setUserAchievements(calculateAchievements(response.data));
    } catch (error) {
      console.error('Error al obtener retos completados:', error);
      setError('Error al cargar retos completados. Posiblemente necesites iniciar sesión.');
      setChallenges([]);
      setUserAchievements([]);
    }
  };
  
  // Calcula logros locales basados en retos completados
  const calculateAchievements = (completedChallenges) => {
    const achievements = [];
    if (!completedChallenges || completedChallenges.length === 0) return achievements;

    // 1. Completa tu primer reto
    if (completedChallenges.length >= 1) {
      achievements.push({
        id: 'first-challenge',
        titulo: '¡Primer reto completado!',
        descripcion: 'Has completado tu primer reto.',
        icono: '🏅',
        fechaConseguido: completedChallenges[0].ultimoProgreso || new Date(),
      });
    }

    // 2. Completa 5 retos
    if (completedChallenges.length >= 5) {
      achievements.push({
        id: 'five-challenges',
        titulo: '¡Cinco retos completados!',
        descripcion: 'Has completado 5 retos.',
        icono: '🥇',
        fechaConseguido: completedChallenges[4].ultimoProgreso || new Date(),
      });
    }

    // 3. Completa 5 retos de una misma categoría
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
  
  // Actualizar la función joinChallenge para manejar correctamente la sesión
  const joinChallenge = async (challengeId) => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser?.id) { // Usar validación más robusta
        alert("Debes iniciar sesión para unirte a un reto. Tu sesión puede haber expirado.");
        return;
      }

      // Mostrar indicador de carga mientras se procesa
      const originalChallenges = [...challenges]; // Guardar el estado actual por si hay error
      setChallenges(challenges.filter(c => c.id !== challengeId)); 
    
      const response = await axios.post('http://localhost:5000/api/challenges/join', 
        { challengeId, userId: currentUser.id }, // Añadir userId al cuerpo
        apiConfig()
      );
      
      if (response.data && response.data.userChallenge) {
        // Actualizar la lista de retos del usuario con el nuevo reto
        setUserChallenges(prevChallenges => [...prevChallenges, response.data.userChallenge]);
        
        // Notificar al usuario
        alert(`Te has unido al reto "${response.data.userChallenge.titulo}" con éxito`);
        
        // Cambiar automáticamente a la pestaña "Mis retos"
        setActiveTab('joined');
        
        // Si estamos viendo el detalle de este reto, actualizar la vista
        if (activeChallenge && activeChallenge.id === challengeId) {
          setActiveChallenge(null); // Cerrar el detalle para mostrar la lista
        }
      } else {
        // Si la respuesta no contiene los datos esperados, restaurar el estado
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
  
  // Función para actualizar el progreso de un reto
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

      // Refresca la lista de retos del usuario tras actualizar el progreso
      await fetchUserChallenges(currentUser.id);

      if (newProgress === 100) {
        alert('¡Felicidades! Has completado el reto');
        // Refresca también la pestaña de completados si está activa
        if (activeTab === 'completed') {
          await fetchCompletedChallenges(currentUser.id);
        }
      }
    } catch (err) {
      console.error('Error al actualizar progreso:', err);
      alert('Hubo un problema al actualizar el progreso. Inténtalo de nuevo.');
    }
  };

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

  // Agregar una depuración en el renderChallengesList
  // Mejorar el renderChallengesList para un mejor filtrado
  const renderChallengesList = () => {
    console.log('Renderizando lista de retos. Retos disponibles:', challenges.length);
    console.log('Retos del usuario (userChallenges):', userChallenges.length);
    
    let displayChallenges = [];
    
    if (activeTab === 'active') {
      // Mostrar solo retos activos en los que el usuario no participa
      // `challenges` debe contener todos los retos activos del servidor
      // `userChallenges` debe contener los retos en los que el usuario participa
      displayChallenges = challenges.filter(challenge => 
        challenge.activo && !userChallenges.some(uc => uc.challengeId === challenge.id) // Comparar con uc.challengeId
      );
      console.log('Retos activos filtrados para mostrar:', displayChallenges.length);
    } else if (activeTab === 'joined') {
      // Mostrar retos en los que el usuario participa y no han terminado
      // userChallenges ya contiene los retos del usuario con su progreso
      displayChallenges = userChallenges.filter(uc => 
        !uc.completado && new Date(uc.challenge.fechaFin) >= new Date()
      ).map(uc => ({...uc.challenge, progreso: uc.progreso, userChallengeId: uc.id })); // Mapear para incluir progreso y el ID de UserChallenge
      console.log('Retos participantes filtrados para mostrar:', displayChallenges.length);
    } else if (activeTab === 'completed') {
      // `challenges` en este caso debería ser llenado por fetchCompletedChallenges
      // que devuelve UserChallenge con el Challenge anidado.
      displayChallenges = challenges.map(uc => ({...uc.challenge, progreso: uc.progreso, userChallengeId: uc.id }));
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
                <span className="text-sm text-gray-400">
                  Finaliza: {new Date(challenge.fechaFin).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
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
    </div>
  );
}
