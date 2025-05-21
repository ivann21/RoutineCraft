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
import Community from "./components/Community"; // Importar componente Community
import Challenges from "./components/Challenges"; // Importar componente Challenges
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiesPage from "./components/CookiesPage";
import ScrollToTop from "./components/ScrollToTop"; // Importar el componente

export default function App() {
  const [user, setUser] = useState(null);

  // Al iniciar la app, intentar cargar el usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/add-rutina" element={<AddRutina />} />
        <Route path="/edit-rutina/:id" element={<EditRutina />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPage />} />
        {/* Nuevas rutas */}
        <Route path="/progress" element={<Progress />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
      <Footer />
    </div>
  );
}