import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PlansPage from "./components/PlansPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Rutinas from "./Rutinas";
import AddRutina from "./components/AddRutina";
import EditRutina from "./components/EditRutina";
import Ejercicios from "./components/Ejercicios";
import Entrenadores from "./components/Entrenadores";
import Calendario from "./components/Calendario";
import Progress from "./components/Progress"; // Importar componente Progress
import Challenges from "./components/Challenges"; // Importar componente Challenges
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiesPage from "./components/CookiesPage";
import ScrollToTop from "./components/ScrollToTop"; // Importar el componente
import ProtectedRoute from "./components/ProtectedRoute";
import { handleLoginTransition } from './utils/userUtils';

export default function App() {
  const [user, setUser] = useState(null);

  // Sincronizar el estado del usuario con localStorage
  useEffect(() => {
    const checkUserAuth = () => {
      const userId = localStorage.getItem("usuarioId");
      const userName = localStorage.getItem("userName");
      const userEmail = localStorage.getItem("userEmail");

      if (userId && userName) {
        // Si hay ID y nombre de usuario en localStorage, actualizar el estado
        setUser({
          id: userId,
          nombre: userName,
          email: userEmail || "",
        });
      } else {
        // Si no hay información de usuario en localStorage, limpiar el estado
        setUser(null);
      }
    };

    // Verificar al montar el componente
    checkUserAuth();

    // Escuchar cambios en el localStorage
    const handleStorageChange = () => {
      checkUserAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Handle special case when user just logged in
    handleLoginTransition();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} setUser={setUser} />
      <ScrollToTop /> {/* Añadir el componente aquí */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/rutinas"
          element={
            <ProtectedRoute>
              <Rutinas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-rutina"
          element={
            <ProtectedRoute>
              <AddRutina />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-rutina/:id"
          element={
            <ProtectedRoute>
              <EditRutina />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ejercicios"
          element={
            <ProtectedRoute>
              <Ejercicios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/entrenadores"
          element={
            <ProtectedRoute>
              <Entrenadores />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendario"
          element={
            <ProtectedRoute>
              <Calendario />
            </ProtectedRoute>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPage />} />
        {/* Nuevas rutas */}
        <Route path="/progress" element={<Progress />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
      <Footer />
    </div>
  );
}