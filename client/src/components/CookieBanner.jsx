import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

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
