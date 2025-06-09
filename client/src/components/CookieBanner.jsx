import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true); // Cambiado a true por defecto

  useEffect(() => {
    // Función para verificar el consentimiento de cookies
    const checkCookieConsent = () => {
      try {
        // Intentar obtener datos de consentimiento del localStorage
        const cookiesAcceptedData = localStorage.getItem('cookiesAccepted');
        
        // Si no hay datos, mostrar el banner
        if (!cookiesAcceptedData) {
          console.log('No se encontró consentimiento de cookies, mostrando banner');
          setShowBanner(true);
          return;
        }
        
        // Analizar los datos almacenados
        const { accepted, expiresAt } = JSON.parse(cookiesAcceptedData);
        const now = new Date().getTime();
        
        // Mostrar el estado actual para depuración
        console.log('Estado de consentimiento de cookies:', {
          accepted,
          expiresAt,
          now,
          expired: now > expiresAt,
          timeRemaining: Math.round((expiresAt - now) / (1000 * 60 * 60)) + ' horas'
        });
        
        // Determinar si debemos mostrar el banner
        if (!accepted || now > expiresAt) {
          console.log('Consentimiento expirado o no aceptado, mostrando banner');
          setShowBanner(true);
        } else {
          console.log('Consentimiento válido, ocultando banner');
          setShowBanner(false);
        }
      } catch (error) {
        console.error('Error al verificar consentimiento:', error);
        setShowBanner(true); // En caso de error, mostrar el banner
      }
    };
    
    // Ejecutar la verificación inmediatamente al cargar el componente
    checkCookieConsent();
  }, []); // Sin dependencias para que solo se ejecute una vez al montar el componente

  const acceptCookies = () => {
    try {
      // Crear fecha de expiración (1 día a partir de ahora)
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24);
      
      // Preparar datos para guardar
      const cookieData = {
        accepted: true,
        expiresAt: expirationDate.getTime()
      };
      
      console.log('Guardando consentimiento de cookies con expiración:', {
        acceptedAt: new Date().toLocaleString(),
        expiresAt: expirationDate.toLocaleString(),
        millisecondsUntilExpiration: expirationDate.getTime() - new Date().getTime()
      });
      
      // Guardar en localStorage
      localStorage.setItem('cookiesAccepted', JSON.stringify(cookieData));
      
      // Ocultar el banner
      setShowBanner(false);
      
      // Verificar que se guardó correctamente (para depuración)
      const saved = localStorage.getItem('cookiesAccepted');
      console.log('Datos guardados en localStorage:', saved);
    } catch (error) {
      console.error('Error al aceptar cookies:', error);
      
      // Intentar un método más simple como respaldo
      try {
        localStorage.setItem('cookiesAccepted', JSON.stringify({
          accepted: true,
          expiresAt: Date.now() + (24 * 60 * 60 * 1000)
        }));
        setShowBanner(false);
      } catch (fallbackError) {
        console.error('Error en método de respaldo:', fallbackError);
      }
    }
  };

  // Si showBanner es false, no renderizar nada
  if (!showBanner) return null;

  // Renderizar el banner de cookies
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-sm mb-4 md:mb-0">
          Utilizamos cookies para mejorar tu experiencia en nuestra web. Al continuar navegando, aceptas nuestra 
          <Link to="/privacy" className="text-blue-400 hover:text-blue-300 mx-1">
            política de privacidad
          </Link>
          y el uso de cookies.
        </div>
        <div className="flex gap-2">
          <Link 
            to="/cookies" 
            className="px-4 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-600 transition"
          >
            Más información
          </Link>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
