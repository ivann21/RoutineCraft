import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PlansPage from "./components/PlansPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

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
      </Routes>
      <Footer />
    </div>
  );
}