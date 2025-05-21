import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeroSection() {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleViewPlans = () => {
    window.scrollTo(0, 0); // Asegurar que la página suba al inicio
    navigate("/planes");
  };

  const faqs = [
    {
      question: "¿Cómo empiezo con RoutineCraft?",
      answer: "Simplemente regístrate, crea tu primera rutina y comienza a programar tus entrenamientos en el calendario. ¡Es así de fácil!"
    },
    {
      question: "¿Necesito experiencia previa en el gimnasio?",
      answer: "No, RoutineCraft es para todos los niveles. Puedes empezar con rutinas básicas y progresar a tu ritmo."
    },
    {
      question: "¿Puedo personalizar mis rutinas?",
      answer: "¡Sí! Puedes crear rutinas desde cero o modificar las existentes, ajustando series, repeticiones y ejercicios según tus necesidades."
    },
    {
      question: "¿Cómo funcionan las sesiones con entrenadores?",
      answer: "Puedes contratar a un entrenador profesional que te guiará y ajustará tus rutinas para maximizar tus resultados."
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
              <Link 
                to="/register" 
                onClick={() => window.scrollTo(0, 0)}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Comenzar ahora
              </Link>
              <Link 
                to="/planes" 
                onClick={() => window.scrollTo(0, 0)}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-orange-500/20"
              >
                Ver Planes
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Todo lo que necesitas para alcanzar tus metas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Rutinas Feature */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rutinas Personalizadas</h3>
            <p className="text-gray-400">
              Crea y personaliza tus rutinas de ejercicio. Organiza series, repeticiones y descansos para cada ejercicio.
            </p>
          </div>

          {/* Ejercicios Feature */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Biblioteca de Ejercicios</h3>
            <p className="text-gray-400">
              Accede a una amplia biblioteca de ejercicios con descripciones detalladas y guías visuales para una ejecución correcta.
            </p>
          </div>

          {/* Calendario Feature */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Calendario de Entrenamiento</h3>
            <p className="text-gray-400">
              Programa tus rutinas en el calendario y mantén un seguimiento constante de tus entrenamientos diarios.
            </p>
          </div>

          {/* Entrenadores Feature */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Entrenadores Expertos</h3>
            <p className="text-gray-400">
              Conecta con entrenadores profesionales que te ayudarán a maximizar tus resultados y mantener la motivación.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Cómo Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Crea tu Cuenta</h3>
            <p className="text-gray-400">
              Regístrate gratis y configura tu perfil personal de entrenamiento
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Diseña tus Rutinas</h3>
            <p className="text-gray-400">
              Crea rutinas personalizadas usando nuestra biblioteca de ejercicios
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Comienza a Entrenar</h3>
            <p className="text-gray-400">
              Programa tus rutinas en el calendario y sigue tu progreso
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">1000+</h3>
            <p className="text-gray-400">Usuarios Activos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">500+</h3>
            <p className="text-gray-400">Ejercicios Disponibles</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
            <p className="text-gray-400">Entrenadores Expertos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">98%</h3>
            <p className="text-gray-400">Clientes Satisfechos</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Lo que Dicen Nuestros Usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold">María García</h4>
                <p className="text-gray-400 text-sm">Usuario desde hace 6 meses</p>
              </div>
            </div>
            <p className="text-gray-300">
              "RoutineCraft ha transformado completamente mi rutina de ejercicios. La planificación es súper fácil y los resultados son increíbles."
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">J</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold">Juan Pérez</h4>
                <p className="text-gray-400 text-sm">Usuario desde hace 1 año</p>
              </div>
            </div>
            <p className="text-gray-300">
              "Los entrenadores son excelentes y la app es muy intuitiva. He logrado mis objetivos más rápido de lo que esperaba."
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold">Ana Martínez</h4>
                <p className="text-gray-400 text-sm">Usuario desde hace 3 meses</p>
              </div>
            </div>
            <p className="text-gray-300">
              "La biblioteca de ejercicios es muy completa y el calendario me ayuda a mantenerme organizada. ¡Totalmente recomendado!"
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-white transform transition-transform ${
                    activeQuestion === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === index && (
                <div className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Cuerpo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete hoy y comienza tu viaje hacia una vida más saludable
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            >
              Empezar Ahora
            </a>
            <button
              onClick={handleViewPlans}
              className="px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all"
            >
              Ver Planes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}