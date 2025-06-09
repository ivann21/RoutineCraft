import { useState } from "react";
import axios from "axios";

export default function Login({ setUser }) {
  // Estados para manejar el formulario de login y UI
  const [formData, setFormData] = useState({
    email: "",            // Email del usuario
    contraseña: "",       // Contraseña del usuario
  });
  const [error, setError] = useState("");     // Mensaje de error
  const [loading, setLoading] = useState(false); // Estado de carga durante la autenticación

  // Manejador de cambios en campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");        // Limpiar errores previos
    setLoading(true);    // Activar indicador de carga

    try {
      // Enviar solicitud de login al servidor
      const response = await axios.post("/login", formData);
      const { token, user } = response.data;

      // Almacenar datos de usuario y token en localStorage
      localStorage.setItem("userToken", token);
      localStorage.setItem("usuarioId", user.id);
      localStorage.setItem("userName", user.nombre);
      localStorage.setItem("userEmail", user.email);
      
      // Guardar objeto de usuario completo
      localStorage.setItem("user", JSON.stringify(user));

      // Actualizar estado de usuario en componente padre (si existe)
      if (setUser) {
        setUser(user);
      }
      
      // Redireccionar a la página de rutinas
      window.location.href = '/rutinas';
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Mostrar mensaje de error desde la respuesta del servidor o genérico
      setError(error.response?.data?.error || "Error al iniciar sesión");
      setLoading(false); // Desactivar indicador de carga
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contraseña" className="block text-sm font-medium text-gray-300">
            Contraseña
          </label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
}