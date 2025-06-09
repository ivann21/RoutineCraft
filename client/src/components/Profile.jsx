import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../api/axios'; 
import defaultProfilePic from "/default-profile.png?url";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

// URL de la API según el entorno (desarrollo local o producción)
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:5000' 
  : 'https://routinecraft.onrender.com';

export default function Profile() {
  // Estados para manejar datos y UI del perfil de usuario
  const [user, setUser] = useState(null);         // Datos del usuario
  const [editing, setEditing] = useState(false);  // Estado de edición del perfil
  const [formData, setFormData] = useState({ nombre: "", email: "", contraseña: "", foto: "" }); // Datos del formulario
  const [planInfo, setPlanInfo] = useState(null); // Información del plan de suscripción
  const [contrataciones, setContrataciones] = useState([]); // Entrenadores contratados
  const [loading, setLoading] = useState(true);   // Estado de carga
  const [error, setError] = useState(null);       // Errores en la carga/actualización del perfil
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Control del modal de eliminación
  const [deleteError, setDeleteError] = useState(null); // Error durante la eliminación de cuenta
  const navigate = useNavigate(); // Hook para navegación programática

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Obtener información básica del usuario desde localStorage
        const userId = localStorage.getItem("usuarioId");
        const userName = localStorage.getItem("userName");
        const userEmail = localStorage.getItem("userEmail");
        
        // Verificar que existe un usuario en sesión
        if (!userId) {
          setError("No se encontró información de usuario. Por favor, inicie sesión de nuevo.");
          setLoading(false);
          return;
        }

        // Crear objeto con datos básicos del usuario
        const basicUser = {
          id: userId,
          nombre: userName || "",
          email: userEmail || ""
        };
        
        // Establecer usuario con información básica
        setUser(basicUser);
        
        // Inicializar formulario con datos básicos
        setFormData({
          nombre: basicUser.nombre,
          email: basicUser.email,
          contraseña: "",
          foto: defaultProfilePic
        });

        try {
          // Obtener información completa del perfil desde la API
          const response = await axios.get(`/api/profile/${userId}`);
          const userData = response.data;
          setUser(userData);
          
          // Manejar la URL de la foto de perfil
          if (userData.fotoUrl) {
            const fullPhotoUrl = userData.fotoUrl.startsWith('http') 
              ? userData.fotoUrl 
              : `${API_URL}${userData.fotoUrl}`;
              
            // Guardar la URL de la foto en localStorage para uso global
            localStorage.setItem("userProfilePic", fullPhotoUrl);
            
            // Notificar a los componentes que escuchan este evento
            try {
              window.dispatchEvent(new Event('userLogin'));
            } catch (e) {
              console.error("Error al notificar cambio de foto:", e);
            }
            
            // Actualizar formulario con datos completos incluyendo foto
            setFormData({
              nombre: userData.nombre,
              email: userData.email,
              contraseña: "",
              foto: fullPhotoUrl,
            });
          } else {
            // Si no hay foto, usar la imagen por defecto
            setFormData({
              nombre: userData.nombre,
              email: userData.email,
              contraseña: "",
              foto: defaultProfilePic
            });
          }
          
          // Cargar información adicional: plan y contrataciones
          await Promise.all([
            fetchPlanInfo(userId),
            fetchContrataciones(userId)
          ]);
        } catch (error) {
          console.error("Error al cargar el perfil completo:", error);
          // No establece error general para permitir continuar con datos básicos
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
        // Obtener información del plan de suscripción
        const response = await axios.get(`/api/user-plan/${userId}`);
        setPlanInfo(response.data);
      } catch (error) {
        console.error('Error al obtener información del plan:', error);
      }
    };

    const fetchContrataciones = async (userId) => {
      try {
        // Obtener entrenadores contratados por el usuario
        const response = await axios.get(`/api/contrataciones/usuario/${userId}`);
        setContrataciones(response.data);
      } catch (error) {
        console.error('Error al obtener contrataciones:', error);
      }
    };

    fetchUserData();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar cambios de foto de perfil
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

  // Guardar cambios en el perfil
  const handleSave = async () => {
    // Crear objeto con datos actualizados
    const updatedUser = {
      ...user,
      nombre: formData.nombre,
      email: formData.email,
      foto: formData.foto,
    };

    // Manejo de subida de nueva foto de perfil
    const fileInput = document.getElementById("foto");
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const formDataToSend = new FormData();
      formDataToSend.append("profilePic", file);
      formDataToSend.append("userId", user.id); 

      try {
        // Enviar la nueva foto al servidor
        const response = await axios.post("/upload-profile-pic", formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const data = response.data;
        updatedUser.foto = data.imageUrl; 
        
        // Actualizar URL de foto en localStorage
        const fullPhotoUrl = data.imageUrl.startsWith('http') 
          ? data.imageUrl 
          : `${API_URL}${data.imageUrl}`;
        localStorage.setItem("userProfilePic", fullPhotoUrl);
      } catch (error) {
        console.error("Error al subir la foto de perfil:", error);
        alert("Error al subir la foto de perfil.");
        return;
      }
    }

    try {
      // Actualizar datos en localStorage para mantenerlos sincronizados
      localStorage.setItem("userName", formData.nombre);
      localStorage.setItem("userEmail", formData.email);
      
      // Actualizar URL de foto en localStorage si existe
      if (updatedUser.foto) {
        const fullPhotoUrl = updatedUser.foto.startsWith('http') 
          ? updatedUser.foto 
          : `${API_URL}${updatedUser.foto}`; 
        localStorage.setItem("userProfilePic", fullPhotoUrl);
      }
      
      // Guardar el objeto de usuario completo
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      // Actualizar estado del usuario y salir del modo edición
      setUser(updatedUser);
      setEditing(false);
      
      // Notificar a los componentes que escuchan cambios en localStorage
      window.dispatchEvent(new Event('storage'));
      
      // Notificar evento de login (para actualizar UI que muestra foto/nombre)
      window.dispatchEvent(new Event('userLogin'));

      // Mostrar notificación de éxito
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50';
      successMessage.textContent = 'Perfil actualizado con éxito';
      document.body.appendChild(successMessage);
      
      // Eliminar la notificación después de 3 segundos
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 3000);
      
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      
      // Actualizar localStorage incluso si hay error en el servidor
      localStorage.setItem("userName", formData.nombre);
      localStorage.setItem("userEmail", formData.email);
      
      // Intentar actualizar la foto si existe
      if (updatedUser.foto) {
        try {
          const photoUrl = updatedUser.foto.startsWith('http') 
            ? updatedUser.foto 
            : `${API_URL}${updatedUser.foto}`;
          localStorage.setItem("userProfilePic", photoUrl);
        } catch (e) {
          console.error("Error guardando la foto:", e);
        }
      }
      
      // Guardar el objeto de usuario completo
      try {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } catch (e) {
        console.error("Error guardando el usuario completo:", e);
      }
      
      // Actualizar estado del usuario y salir del modo edición
      setUser(updatedUser);
      setEditing(false);
      
      // Notificar a otros componentes
      try {
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new Event('userLogin'));
      } catch (e) {
        console.error("Error al disparar evento storage:", e);
      }
      
      // Mostrar notificación de actualización local
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
        console.error("Error al mostrar notificación:", e);
        alert('Perfil actualizado pero no se pudo conectar con el servidor');
      }
    }
  };

  // Función para eliminar la cuenta de usuario
  const handleDeleteAccount = async () => {
    try {
      setDeleteError(null);
      const userId = localStorage.getItem("usuarioId");
      if (!userId) {
        throw new Error("No se encontró ID de usuario");
      }
      
      console.log("Enviando solicitud para eliminar usuario:", userId);
      
      // Solicitud para eliminar la cuenta con un timeout generoso
      await axios({
        method: 'DELETE',
        url: `/api/users/${userId}`,
        timeout: 15000 
      });

      // Limpiar todos los datos de localStorage
      localStorage.clear();
      
      // Mostrar mensaje de éxito
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50';
      successMessage.textContent = 'Cuenta eliminada correctamente';
      document.body.appendChild(successMessage);
      
      // Redireccionar al inicio después de 2 segundos
      setTimeout(() => {
        document.body.removeChild(successMessage);
        navigate('/');
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
      setDeleteError(error.message);
      setShowDeleteModal(false); 
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
        
        {/* Show delete error if exists */}
        {deleteError && (
          <div className="mb-4 p-3 bg-red-900 border border-red-800 rounded text-white">
            <p className="font-bold">Error al eliminar cuenta:</p>
            <p>{deleteError}</p>
          </div>
        )}
        
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
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-3"
            >
              Editar Perfil
            </button>
            
            {/* Botón para eliminar cuenta */}
            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Eliminar Cuenta
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

        {/* Modal de confirmación para eliminar cuenta */}
        {showDeleteModal && (
          <DeleteConfirmationModal
            onConfirm={handleDeleteAccount}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    </div>
  );
}