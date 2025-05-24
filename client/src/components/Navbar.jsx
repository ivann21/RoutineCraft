import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultProfilePic from "/default-profile.png?url";

export default function Navbar({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  // Enlaces simplificados - sin menús desplegables
  const mainLinks = [
    { to: "/", text: "Inicio" },
    { to: "/rutinas", text: "Rutinas" },
    { to: "/ejercicios", text: "Ejercicios" },
    { to: "/calendario", text: "Calendario" },
    { to: "/entrenadores", text: "Entrenadores" },
    { to: "/challenges", text: "Retos" },
    { to: "/planes", text: "Planes" },
  ];

  const handleLogout = () => {
    // Limpiar completamente el almacenamiento local
    localStorage.clear();
    
    // Notificar a la aplicación que el usuario se ha desconectado
    window.dispatchEvent(new Event('storage'));
    
    // Actualizar estado de usuario (reemplaza las variables isLoggedIn y userName)
    setUser(null);
    
    // Redireccionar al inicio
    navigate('/');
  };

  // Cargar usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user"); // Eliminar datos corruptos
      }
    }
  }, [setUser, user]);

  // Actualizar método de carga de foto de perfil
  useEffect(() => {
    const loadUserProfile = () => {
      // Intentar obtener la foto desde múltiples fuentes
      const userId = localStorage.getItem("usuarioId");
      
      // Si tenemos el ID del usuario pero no la URL de la foto
      if (userId) {
        // Intentar obtener directamente del localStorage
        const storedPic = localStorage.getItem("userProfilePic");
        if (storedPic) {
          setProfilePic(storedPic);
          return;
        }

        // Si no hay foto específica, intentar obtener de user
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.fotoUrl) {
              const picUrl = parsedUser.fotoUrl.startsWith("http") 
                ? parsedUser.fotoUrl 
                : `http://localhost:5000${parsedUser.fotoUrl}`;
              setProfilePic(picUrl);
              return;
            }
          } catch (error) {
            console.error("Error parsing user from localStorage:", error);
          }
        }

        // Como último recurso, verificar si user prop tiene foto
        if (user?.fotoUrl) {
          const picUrl = user.fotoUrl.startsWith("http")
            ? user.fotoUrl
            : `http://localhost:5000${user.fotoUrl}`;
          setProfilePic(picUrl);
          return;
        }
      } else {
        // No hay usuario logueado, usar imagen por defecto
        setProfilePic(defaultProfilePic);
      }
    };

    // Cargar al inicializar
    loadUserProfile();
    
    // También recargar cuando cambie el usuario
  }, [user]);

  // Mejorar la gestión de eventos de almacenamiento
  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log("Storage event detected:", event?.type || "unknown event");
      
      // Verificar si el usuario ha cerrado sesión
      const userId = localStorage.getItem('usuarioId');
      
      if (!userId) {
        setUser(null);
        setProfilePic(defaultProfilePic);
        return;
      }
      
      // Si hay usuario pero no tenemos el objeto user actual, intentar reconstruirlo
      if (userId) {
        // Construir objeto básico de usuario desde localStorage
        const userName = localStorage.getItem('userName');
        const userEmail = localStorage.getItem('userEmail');
        
        setUser(prevUser => {
          if (!prevUser) {
            return {
              id: userId,
              nombre: userName,
              email: userEmail
            };
          }
          return prevUser;
        });
        
        // SIEMPRE intentar actualizar la foto de perfil al detectar un cambio
        const storedPic = localStorage.getItem("userProfilePic");
        if (storedPic) {
          console.log("Found profile pic in localStorage:", storedPic);
          setProfilePic(storedPic);
        } else {
          // Fallback: obtener del objeto user completo
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            try {
              const parsedUser = JSON.parse(storedUser);
              if (parsedUser.fotoUrl || parsedUser.fullPhotoUrl) {
                const picUrl = parsedUser.fullPhotoUrl || (parsedUser.fotoUrl?.startsWith("http") 
                  ? parsedUser.fotoUrl 
                  : `http://localhost:5000${parsedUser.fotoUrl}`);
                
                // Guardar en localStorage para futuras referencias
                localStorage.setItem("userProfilePic", picUrl);
                setProfilePic(picUrl);
                console.log("Updated profile pic from user object:", picUrl);
              }
            } catch (e) {
              console.error("Error parsing user for profile pic:", e);
            }
          }
        }
      }
    };
    
    // Manejar evento específico para actualizar la foto directamente
    const handlePhotoUpdate = (event) => {
      console.log("Photo update event received", event.detail);
      if (event.detail?.photoUrl && 
          event.detail.photoUrl !== 'null' && 
          event.detail.photoUrl !== 'undefined') {
        const photoUrl = event.detail.photoUrl;
        console.log("Setting profile pic from event:", photoUrl);
        setProfilePic(photoUrl);
        
        // Always update localStorage for consistency
        localStorage.setItem("userProfilePic", photoUrl);
      } else {
        console.log("Received invalid photo URL in event, ignoring");
      }
    };
    
    // New handler specifically for the force update event
    const handleForceUpdate = (event) => {
      console.log("FORCE UPDATE event received for profile pic", event.detail);
      if (event.detail?.photoUrl && 
          event.detail.photoUrl !== 'null' && 
          event.detail.photoUrl !== 'undefined') {
        // Update the profile pic immediately
        setProfilePic(event.detail.photoUrl);
      } else {
        console.log("Received invalid photo URL in force update event, ignoring");
      }
    };
    
    // Escuchar por eventos de storage y también por eventos personalizados
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userLogin', handleStorageChange);
    window.addEventListener('userPhotoUpdate', handlePhotoUpdate);
    window.addEventListener('forceProfileUpdate', handleForceUpdate);
    
    // Ejecutar una vez al inicio para asegurarse de tener la última foto
    handleStorageChange({type: 'init'});
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLogin', handleStorageChange);
      window.removeEventListener('userPhotoUpdate', handlePhotoUpdate);
      window.removeEventListener('forceProfileUpdate', handleForceUpdate);
    };
  }, [setUser]);

  // Añadir un efecto adicional específico para actualizar la foto cuando cambia el usuario
  useEffect(() => {
    // Si el usuario existe, verificar si tiene foto
    if (user) {
      // Primero intentar desde localStorage
      const storedPic = localStorage.getItem("userProfilePic");
      if (storedPic) {
        setProfilePic(storedPic);
      } 
      // Luego verificar si el objeto user tiene foto
      else if (user.fotoUrl || user.fullPhotoUrl) {
        const picUrl = user.fullPhotoUrl || (user.fotoUrl?.startsWith("http") 
          ? user.fotoUrl 
          : `http://localhost:5000${user.fotoUrl}`);
        
        // Guardar en localStorage para futuras referencias
        localStorage.setItem("userProfilePic", picUrl);
        setProfilePic(picUrl);
      }
    } else {
      setProfilePic(defaultProfilePic);
    }
  }, [user]);

  // Cerrar menú de usuario al hacer clic fuera
  useEffect(() => {
    // Creamos una función específica para manejar los clics en los enlaces del menú
    const handleMenuItemClick = (e) => {
      // Si el clic fue en un elemento del menú, permitimos la navegación
      if (e.target.closest('.dropdown-menu-item')) {
        // Cerramos el menú después de un pequeño delay para permitir que la navegación ocurra primero
        setTimeout(() => {
          setUserMenuOpen(false);
        }, 100);
      }
    };

    const handleClickOutside = (event) => {
      // Solo cerramos el menú si el clic fue fuera del menú y su botón
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleMenuItemClick);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleMenuItemClick);
    };
  }, []);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra de navegación principal */}
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              RoutineCraft
            </Link>
          </div>

          {/* Enlaces principales (visible solo en desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Sección de usuario (desktop) */}
          <div className="hidden md:flex md:items-center">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  className="flex items-center text-gray-300 hover:text-white cursor-pointer px-3 py-2 rounded-md"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-expanded={userMenuOpen}
                >
                  <span className="mr-2">{user.nombre}</span>
                  <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <img
                      src={profilePic}
                      alt="Perfil"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown menu - usando Portal para renderizarlo fuera del flow normal */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg overflow-hidden z-50 dropdown-menu">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white dropdown-menu-item"
                    >
                      Perfil
                    </a>
                    <a
                      href="/progress"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white dropdown-menu-item"
                    >
                      Mi Progreso
                    </a>
                    <a
                      href="/planes"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white dropdown-menu-item"
                    >
                      Mi Plan
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white dropdown-menu-item"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Botón menú móvil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Sección de usuario en móvil */}
        <div className="pt-4 pb-3 border-t border-gray-700">
          {user ? (
            <>
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                    <img
                      src={profilePic}
                      alt="Perfil"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.nombre}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Perfil
                </Link>
                <Link
                  to="/progress"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mi Progreso
                </Link>
                <Link
                  to="/planes"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mi Plan
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            <div className="px-2 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}