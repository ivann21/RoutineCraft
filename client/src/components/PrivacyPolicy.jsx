import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidad</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <p className="text-gray-300 mb-4">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-xl font-semibold text-white mb-4">1. Introducción</h2>
          <p className="text-gray-300 mb-4">
            En RoutineCraft, accesible desde routinecraft.com, una de nuestras principales prioridades es la privacidad de 
            nuestros visitantes. Esta Política de Privacidad documenta los tipos de información que recopilamos y 
            registramos y cómo la utilizamos.
          </p>
          <p className="text-gray-300 mb-4">
            Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes 
            en contactarnos.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. Información que recopilamos</h2>
          <p className="text-gray-300 mb-4">
            Cuando te registras en nuestra plataforma, recopilamos la información personal que nos proporcionas, como tu 
            nombre, dirección de correo electrónico y contraseña.
          </p>
          <p className="text-gray-300 mb-4">
            Además, mientras utilizas nuestra plataforma, recopilamos información sobre:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Tus rutinas de ejercicio y calendarios de entrenamiento</li>
            <li>Tus interacciones con entrenadores</li>
            <li>Tu uso de la plataforma y características que utilizas</li>
            <li>Información técnica como tu dirección IP, tipo de navegador y dispositivo</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Cómo utilizamos tu información</h2>
          <p className="text-gray-300 mb-4">
            Utilizamos la información que recopilamos para:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Proporcionar, mantener y mejorar nuestra plataforma</li>
            <li>Personalizar tu experiencia y recomendaciones</li>
            <li>Procesar tus transacciones</li>
            <li>Comunicarnos contigo sobre actualizaciones, ofertas y eventos</li>
            <li>Proteger la seguridad de nuestros usuarios y prevenir actividades fraudulentas</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Cookies</h2>
          <p className="text-gray-300 mb-4">
            RoutineCraft utiliza cookies para mejorar tu experiencia mientras navegas por nuestra plataforma. Puedes 
            encontrar más información sobre cómo utilizamos las cookies en nuestra 
            <Link 
              to="/cookies" 
              onClick={scrollToTop}
              className="text-blue-400 hover:text-blue-300 mx-1"
            >
              Política de Cookies
            </Link>.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. Compartir información</h2>
          <p className="text-gray-300 mb-4">
            No vendemos ni alquilamos tu información personal a terceros. Compartimos tu información en las siguientes 
            circunstancias:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Con entrenadores que contrates a través de nuestra plataforma</li>
            <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
            <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Tus derechos</h2>
          <p className="text-gray-300 mb-4">
            Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal, incluyendo 
            el derecho a:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Acceder a tu información personal</li>
            <li>Corregir información inexacta</li>
            <li>Eliminar tu información</li>
            <li>Oponerte al procesamiento de tu información</li>
            <li>Portar tu información a otro servicio</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">7. Contacto</h2>
          <p className="text-gray-300 mb-4">
            Si tienes alguna pregunta sobre nuestra Política de Privacidad, por favor contáctanos en: 
            <a href="mailto:privacy@routinecraft.com" className="text-blue-400 hover:text-blue-300 ml-1">
              privacy@routinecraft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
