import { useEffect, useState } from "react";
import defaultProfilePic from "/default-profile.png?url";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", contraseña: "", foto: "" });
  const [planInfo, setPlanInfo] = useState(null);
  const [contrataciones, setContrataciones] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        const fetchUserProfile = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/profile/${parsedUser.id}`);
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
              setFormData({
                nombre: userData.nombre,
                email: userData.email,
                contraseña: "",
                foto: userData.fotoUrl ? `http://localhost:5000${userData.fotoUrl}` : defaultProfilePic,
              });
              localStorage.setItem("user", JSON.stringify(userData)); // Guardar datos actualizados en localStorage
            } else {
              console.error("Error al cargar el perfil del usuario.");
            }
          } catch (error) {
            console.error("Error al conectar con el servidor:", error);
          }
        };

        fetchUserProfile();

        // Añadir fetch para plan y contrataciones
        const fetchPlanInfo = async (userId) => {
          try {
            const response = await fetch(`http://localhost:5000/api/user-plan/${userId}`);
            if (response.ok) {
              const data = await response.json();
              setPlanInfo(data);
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
            }
          } catch (error) {
            console.error('Error al obtener contrataciones:', error);
          }
        };

        fetchPlanInfo(parsedUser.id);
        fetchContrataciones(parsedUser.id);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
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

    // Guardar los cambios en localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
    alert("Perfil actualizado con éxito.");
  };

  const handlePlanChange = async (newPlan) => {
    try {
      const response = await fetch('http://localhost:5000/api/update-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          newPlan
        })
      });

      if (response.ok) {
        const data = await response.json();
        setPlanInfo(prev => ({ ...prev, plan: data.plan }));
        alert('Plan actualizado con éxito');
      }
    } catch (error) {
      console.error('Error al actualizar el plan:', error);
      alert('Error al actualizar el plan');
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white text-lg">Cargando datos del perfil...</p>
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

        {/* Plan Information */}
        {planInfo && (
          <div className="mt-6 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Plan Actual</h3>
            <div className="text-gray-300 mb-4">
              <p>Plan: {planInfo.plan.toUpperCase()}</p>
              <p>Rutinas: {planInfo.rutinasCreadas} de {planInfo.limite === Infinity ? '∞' : planInfo.limite}</p>
            </div>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => handlePlanChange('free')}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Gratis
              </button>
              <button
                onClick={() => handlePlanChange('basic')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Básico
              </button>
              <button
                onClick={() => handlePlanChange('premium')}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Premium
              </button>
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