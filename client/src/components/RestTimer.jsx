import React, { useState, useEffect } from 'react';

const RestTimer = ({ initialSeconds = 60, onClose }) => {
  // Estados para manejar el temporizador y la interfaz de usuario
  const [seconds, setSeconds] = useState(initialSeconds);  // Tiempo restante en segundos
  const [isActive, setIsActive] = useState(false);         // Estado activo del temporizador
  const [isPaused, setIsPaused] = useState(false);         // Estado pausado
  const [showCompletionModal, setShowCompletionModal] = useState(false); // Modal de completado

  // Resetear temporizador cuando cambia initialSeconds
  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  // Efecto principal para controlar el temporizador
  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      // Si el temporizador está activo y no pausado, reducir segundos cada segundo
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds <= 1) {
            clearInterval(interval); // Detener el intervalo al finalizar
            setIsActive(false);
            
            setShowCompletionModal(true); // Mostrar modal de completado
            
            try {
              // Reproducir sonido de notificación
              const audio = new Audio('/notification.mp3');
              audio.play().catch(e => console.log("Error reproduciendo audio:", e));
              
              // Mostrar notificación del navegador si está permitido
              if ("Notification" in window && Notification.permission === "granted") {
                new Notification("¡Tiempo de descanso completado!", {
                  body: "¡Es hora de continuar con tu entrenamiento!",
                  icon: "/logo.png"
                });
              }
            } catch (error) {
              console.log("Notificación no disponible:", error);
            }
            
            return 0; // Llegar a cero
          }
          return seconds - 1; // Decrementar segundos
        });
      }, 1000);
    } else {
      clearInterval(interval); // Limpiar intervalo si está inactivo o pausado
    }
    
    // Limpiar intervalo al desmontar componente
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  // Funciones para manejar eventos de UI
  const handleCloseCompletionModal = () => {
    setShowCompletionModal(false);
  };

  // Función para formatear el tiempo en formato MM:SS
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Iniciar el temporizador y solicitar permisos de notificación
  const handleStart = () => {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
    setIsActive(true);
    setIsPaused(false);
  };

  // Pausar el temporizador
  const handlePause = () => {
    setIsPaused(true);
  };

  // Reanudar el temporizador desde pausa
  const handleResume = () => {
    setIsPaused(false);
  };

  // Reiniciar el temporizador a su valor inicial
  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
    setIsPaused(false);
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 my-4 relative">
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        aria-label="Cerrar temporizador"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-white mb-2">Temporizador de Descanso</h3>
        <div className="text-3xl font-bold text-blue-400 my-3">{formatTime(seconds)}</div>
        <div className="flex space-x-3">
          {!isActive && !isPaused ? (
            <button 
              onClick={handleStart}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Iniciar
            </button>
          ) : isPaused ? (
            <button 
              onClick={handleResume}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              Continuar
            </button>
          ) : (
            <button 
              onClick={handlePause}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              Pausar
            </button>
          )}
          <button 
            onClick={handleReset}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Modal de completado */}
      {showCompletionModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseCompletionModal}></div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md m-3 z-10 relative animate-bounceIn">
            <div className="text-center">
              <div className="mb-4 text-green-500">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Tiempo completado!</h3>
              <p className="text-gray-300 mb-4">Tu tiempo de descanso ha terminado. ¡Es hora de continuar con el ejercicio!</p>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                onClick={handleCloseCompletionModal}
              >
                ¡Vamos allá!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestTimer;
