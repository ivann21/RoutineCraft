import { useEffect, useState } from "react";
import defaultProfilePic from "/default-profile.png?url";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", contraseña: "", foto: "" });
  const [planInfo, setPlanInfo] = useState(null);
  const [contrataciones, setContrataciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Usar las claves específicas que se establecieron en el Login
        const userId = localStorage.getItem("usuarioId");
        const userName = localStorage.getItem("userName");
        const userEmail = localStorage.getItem("userEmail");
        
        if (!userId) {
          setError("No se encontró información de usuario. Por favor, inicie sesión de nuevo.");
          setLoading(false);
          return;
        }

        // Crear un objeto de usuario básico con la información del localStorage
        const basicUser = {
          id: userId,
          nombre: userName || "",
          email: userEmail || ""
        };
        
        setUser(basicUser);
        
        // Inicializar el formulario con los datos básicos
        setFormData({
          nombre: basicUser.nombre,
          email: basicUser.email,
          contraseña: "",
          foto: defaultProfilePic
        });

        // Cargar el perfil completo desde la API
        const response = await fetch(`http://localhost:5000/api/profile/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          
          // Procesar la URL de la foto y guardarla en localStorage para el Navbar
          if (userData.fotoUrl) {
            const fullPhotoUrl = userData.fotoUrl.startsWith('http') 
              ? userData.fotoUrl 
              : `http://localhost:5000${userData.fotoUrl}`;
              
            // Guardar la URL de la foto para el Navbar
            localStorage.setItem("userProfilePic", fullPhotoUrl);
            
            // Disparar evento para notificar al Navbar
            try {
              window.dispatchEvent(new Event('userLogin'));
            } catch (e) {
              console.error("Error al notificar cambio de foto:", e);
            }
            
            setFormData({
              nombre: userData.nombre,
              email: userData.email,
              contraseña: "",
              foto: fullPhotoUrl,
            });
          } else {
            setFormData({
              nombre: userData.nombre,
              email: userData.email,
              contraseña: "",
              foto: defaultProfilePic
            });
          }
          
          // Cargar información adicional
          await Promise.all([
            fetchPlanInfo(userId),
            fetchContrataciones(userId)
          ]);
          
        } else {
          throw new Error(`Error al cargar el perfil: ${response.status}`);
        }
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
        setError(`No se pudieron cargar los datos: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    const fetchPlanInfo = async (userId) => {
      try {
        const response = await fetch(`http://localhost:5000/api/user-plan/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setPlanInfo(data);
        } else {
          console.error('Error en la respuesta del plan:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener información del plan:', error);
      }
    };

    const fetchContrataciones = async (userId) => {
      try {
        const response = await fetch(`http://localhost:5000/api/contrataciones/usuario/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setContrataciones(data);
        } else {
          console.error('Error en la respuesta de contrataciones:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener contrataciones:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const updatedUser = {
      ...user,
      nombre: formData.nombre,
      email: formData.email,
      foto: formData.foto,
    };

    // Subir la foto al servidor si se seleccionó una nueva
    const fileInput = document.getElementById("foto");
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const formDataToSend = new FormData();
      formDataToSend.append("profilePic", file);
      formDataToSend.append("userId", user.id); // Agregar el ID del usuario al FormData

      try {
        const response = await fetch("http://localhost:5000/upload-profile-pic", {
          method: "POST",
          body: formDataToSend,
        });

        if (response.ok) {
          const data = await response.json();
          updatedUser.foto = data.imageUrl; // Actualizar la URL de la foto en el usuario
          
          // Almacenar la URL de la foto en un ítem específico de localStorage para el Navbar
          const fullPhotoUrl = data.imageUrl.startsWith('http') 
            ? data.imageUrl 
            : `http://localhost:5000${data.imageUrl}`;
          localStorage.setItem("userProfilePic", fullPhotoUrl);
        } else {
          alert("Error al subir la foto de perfil.");
          return;
        }
      } catch (error) {
        console.error("Error al subir la foto de perfil:", error);
        alert("Error en el servidor.");
        return;
      }
    }

    try {
      // Skip the user API update since that endpoint doesn't seem to exist
      // Just handle the photo upload which we already did above
      
      // Actualizar información de usuario en localStorage
      localStorage.setItem("userName", formData.nombre);
      localStorage.setItem("userEmail", formData.email);
      
      // Asegurarnos de que la foto de perfil se almacena correctamente
      if (updatedUser.foto) {
        const fullPhotoUrl = updatedUser.foto.startsWith('http') 
          ? updatedUser.foto 
          : `http://localhost:5000${updatedUser.foto}`;
        localStorage.setItem("userProfilePic", fullPhotoUrl);
      }
      
      // Guardar el objeto completo también (para compatibilidad)
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      // Actualizar estado
      setUser(updatedUser);
      setEditing(false);
      
      // Notificar otros componentes (como Navbar) del cambio
      window.dispatchEvent(new Event('storage'));
      
      // Disparar también el evento específico para actualizar la foto en el Navbar
      window.dispatchEvent(new Event('userLogin'));
      
      // Mostrar mensaje de éxito más elegante en lugar de alert
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50';
      successMessage.textContent = 'Perfil actualizado con éxito';
      document.body.appendChild(successMessage);
      
      // Eliminar el mensaje después de 3 segundos
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 3000);
      
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      
      // Simplificar el manejo de errores para evitar problemas con el segundo try/catch
      localStorage.setItem("userName", formData.nombre);
      localStorage.setItem("userEmail", formData.email);
      
      if (updatedUser.foto) {
        try {
          const photoUrl = updatedUser.foto.startsWith('http') 
            ? updatedUser.foto 
            : `http://localhost:5000${updatedUser.foto}`;
          localStorage.setItem("userProfilePic", photoUrl);
        } catch (e) {
          console.error("Error guardando la foto:", e);
        }
      }
      
      try {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } catch (e) {
        console.error("Error guardando el usuario completo:", e);
      }
      
      // Actualizar estado independientemente de los errores
      setUser(updatedUser);
      setEditing(false);
      
      // Notificar cambios
      try {
        window.dispatchEvent(new Event('storage'));
        // Añadir evento específico para la foto
        window.dispatchEvent(new Event('userLogin'));
      } catch (e) {
        console.error("Error al disparar evento storage:", e);
      }
      
      // Mostrar mensaje
      try {
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-yellow-600 text-white px-6 py-3 rounded shadow-lg z-50';
        successMessage.textContent = 'Perfil actualizado localmente (sin conexión con servidor)';
        document.body.appendChild(successMessage);
        setTimeout(() => {
          try {
            document.body.removeChild(successMessage);
          } catch (e) {
            console.error("Error al eliminar mensaje:", e);
          }
        }, 3000);
      } catch (e) {
        // Si no se puede mostrar el mensaje elegante, usar un alert simple
        console.error("Error al mostrar notificación:", e);
        alert('Perfil actualizado pero no se pudo conectar con el servidor');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white text-lg">Cargando datos del perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Error</h2>
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Volver al inicio de sesión
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white text-lg">No se encontraron datos del usuario.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-white">Perfil del Usuario</h2>
        <div className="flex justify-center mb-6">
          <img
            src={formData.foto || defaultProfilePic}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-2 border-gray-600"
          />
        </div>
        {editing ? (
          <>
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
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contraseña" className="block text-sm font-medium text-gray-300">
                Nueva Contraseña
              </label>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="foto" className="block text-sm font-medium text-gray-300">
                Cambiar Foto de Perfil
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-1 block w-full text-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Guardar Cambios
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-300 mb-4">
              <strong>Nombre:</strong> {user.nombre}
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={() => setEditing(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Editar Perfil
            </button>
          </>
        )}

        {/* Simplified Plan Information - only display current plan */}
        {planInfo && (
          <div className="mt-6 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Plan Actual</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Plan:</span>
                <span className={`font-bold ${
                  planInfo.plan === 'free' ? 'text-gray-300' :
                  planInfo.plan === 'basic' ? 'text-blue-400' :
                  'text-purple-400'
                }`}>
                  {planInfo.plan.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Rutinas:</span>
                <span className="text-gray-300">
                  {planInfo.rutinasCreadas} de {planInfo.limite === Infinity ? '∞' : planInfo.limite}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Entrenadores Contratados */}
        {contrataciones.length > 0 && (
          <div className="mt-6 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Entrenadores Contratados</h3>
            <div className="space-y-4">
              {contrataciones.map((contratacion) => (
                <div key={contratacion.id} className="bg-gray-700 p-4 rounded">
                  <p className="text-white font-bold">{contratacion.entrenador.nombre}</p>
                  <p className="text-gray-300">Plan: {contratacion.planSeleccionado}</p>
                  <p className="text-gray-300">Estado: {contratacion.estado}</p>
                  <p className="text-gray-300">
                    Válido hasta: {new Date(contratacion.fechaFin).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}