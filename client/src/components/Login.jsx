import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data from server:", data.user); // Log para verificar los datos del usuario
        if (data.user) {
          localStorage.setItem("usuarioId", data.user.id); // Guardar el ID del usuario en localStorage
          localStorage.setItem("user", JSON.stringify(data.user)); // Guardar usuario completo en localStorage
          window.dispatchEvent(new Event("storage")); // Forzar actualización del estado en Navbar
          alert("Inicio de sesión exitoso");
          navigate("/"); // Redirigir al inicio
        } else {
          alert("Error: No se recibieron datos del usuario.");
        }
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert("Error en el servidor");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h2>

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
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}