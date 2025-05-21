import React from 'react';

const CookiesPage = () => {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Cookies</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">¿Qué son las cookies?</h2>
          <p className="text-gray-300 mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
            Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar 
            información a los propietarios del sitio.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Tipos de cookies que utilizamos</h2>
          
          <h3 className="text-lg font-medium text-white mt-4 mb-2">Cookies esenciales</h3>
          <p className="text-gray-300 mb-4">
            Estas cookies son necesarias para el funcionamiento básico de nuestro sitio web y no se pueden desactivar. 
            Generalmente solo se establecen en respuesta a acciones realizadas por ti, como configurar tus preferencias 
            de privacidad, iniciar sesión o completar formularios.
          </p>
          
          <h3 className="text-lg font-medium text-white mt-4 mb-2">Cookies de rendimiento</h3>
          <p className="text-gray-300 mb-4">
            Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el 
            rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver cómo 
            se mueven los visitantes por el sitio.
          </p>
          
          <h3 className="text-lg font-medium text-white mt-4 mb-2">Cookies funcionales</h3>
          <p className="text-gray-300 mb-4">
            Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. Pueden ser 
            establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Cómo gestionar las cookies</h2>
          <p className="text-gray-300 mb-4">
            Puedes configurar tu navegador para que rechace todas las cookies, o para que te muestre cuando se está enviando 
            una cookie. Sin embargo, si bloqueas todas las cookies, es posible que algunas partes de nuestro sitio no funcionen 
            correctamente.
          </p>
          <p className="text-gray-300 mb-4">
            La mayoría de los navegadores te permiten:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Ver las cookies que tienes y eliminarlas individualmente</li>
            <li>Bloquear cookies de terceros</li>
            <li>Bloquear cookies de sitios particulares</li>
            <li>Bloquear la configuración de todas las cookies</li>
            <li>Eliminar todas las cookies cuando cierras tu navegador</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Contacto</h2>
          <p className="text-gray-300">
            Si tienes alguna pregunta sobre nuestra política de cookies, por favor contáctanos en: 
            <a href="mailto:privacy@routinecraft.com" className="text-blue-400 hover:text-blue-300">
              privacy@routinecraft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
