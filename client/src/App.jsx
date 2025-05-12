import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/add-rutina" element={<AddRutina />} />
        <Route path="/edit-rutina/:id" element={<EditRutina />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
      <Footer />
    </div>
  );
}