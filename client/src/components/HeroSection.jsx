import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleViewPlans = () => {
    navigate("/plans");
  };

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Efecto de gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="block">TRANSFORMA</span>
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">TU CUERPO</span>
          </h1>
          
          <p className="mt-6 max-w-lg mx-auto text-lg text-gray-300">
            Programa de entrenamiento personalizado para alcanzar tus metas físicas en 12 semanas.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <a 
              href="/register" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Comenzar ahora
            </a>
            <button 
              onClick={handleViewPlans} 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-orange-500/20"
            >
              Ver Planes
            </button>
          </div>
        </div>
      </div>
      
      {/* Efecto de onda decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}