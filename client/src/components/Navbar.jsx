import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user in localStorage:", storedUser); // Agrego un log para verificar el valor en localStorage
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ROUTINE<span className="text-orange-400">CRAFT</span>
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-blue-800/30">
                Inicio
              </Link>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-blue-800/30">
                Rutinas
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-blue-800/30">
                Entrenadores
              </a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/profile" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-blue-800/30">
                    Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-red-800/30"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-blue-800/30">
                    Iniciar Sesión
                  </Link>
                  <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Únete ahora
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}