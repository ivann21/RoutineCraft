import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  // Estados para manejar el formulario y la interacción del usuario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    confirmarContraseña: "",
  });
  const [error, setError] = useState("");         // Mensaje de error
  const [loading, setLoading] = useState(false);  // Estado de carga durante el proceso de registro

  const navigate = useNavigate(); // Hook para navegación programática

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario de registro
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validar que las contraseñas coincidan
    if (formData.contraseña !== formData.confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      // Enviar petición de registro al servidor
      const response = await axios.post("/register", formData);
      console.log('Registro exitoso:', response.data);

      try {
        // Iniciar sesión automáticamente después del registro
        const loginResponse = await axios.post("/login", {
          email: formData.email,
          contraseña: formData.contraseña,
        });

        // Guardar datos de autenticación en localStorage
        localStorage.setItem("userToken", loginResponse.data.token);
        localStorage.setItem("usuarioId", loginResponse.data.user.id);
        localStorage.setItem("userName", loginResponse.data.user.nombre);
        localStorage.setItem("userEmail", loginResponse.data.user.email);

        // Notificar a otros componentes del cambio en localStorage
        window.dispatchEvent(new Event("storage"));

        // Redireccionar a la página de rutinas
        navigate("/rutinas");
      } catch (loginError) {
        console.error("Error al iniciar sesión automáticamente:", loginError);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      setError(error.response?.data?.error || "Error al registrar el usuario");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Regístrate</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

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
          <div className="relative">
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
        </div>

        <div className="mb-6">
          <label htmlFor="confirmarContraseña" className="block text-sm font-medium text-gray-300">
            Confirmar Contraseña
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmarContraseña"
              name="confirmarContraseña"
              value={formData.confirmarContraseña}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
}