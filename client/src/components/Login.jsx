import { useState, useEffect } from "react";
// Remove useNavigate if you're not using it
import axios from "axios";

export default function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Remove the unused navigate variable
  // If you need navigation in the future, you can uncomment this line
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("/login", formData);
      const { token, user } = response.data;

      // Process the profile picture URL first for better visibility in debugging
      let profilePicUrl = null;
      if (user.fotoUrl) {
        // Ensure the URL is complete
        profilePicUrl = user.fotoUrl.startsWith('http') 
          ? user.fotoUrl 
          : `http://localhost:5000${user.fotoUrl.startsWith('/') ? '' : '/'}${user.fotoUrl}`;
          
        console.log('Setting profile pic URL:', profilePicUrl);
        
        // Store it in localStorage immediately for the Navbar
        localStorage.setItem("userProfilePic", profilePicUrl);
        
        // Update the user object with the full URL for consistency
        user.fullPhotoUrl = profilePicUrl;
      }

      // Save session data to localStorage
      localStorage.setItem("userToken", token);
      localStorage.setItem("usuarioId", user.id);
      localStorage.setItem("userName", user.nombre);
      localStorage.setItem("userEmail", user.email);
      
      // Save the complete updated user object
      localStorage.setItem("user", JSON.stringify(user));

      // Update app state directly
      if (setUser) {
        // Add the profile picture directly to the user object
        const userWithPhoto = {
          ...user,
          profilePic: profilePicUrl // Add the photo URL directly to the user object
        };
        setUser(userWithPhoto);
      }
      
      // Standard events after
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new Event('userLogin'));
      
      // Navigate to routines page
      setTimeout(() => {
        window.location.href = '/rutinas';
      }, 100);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(error.response?.data?.error || "Error al iniciar sesión");
      setLoading(false);
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