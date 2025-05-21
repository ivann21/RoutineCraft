import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Términos y Condiciones</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <p className="text-gray-300 mb-4">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-xl font-semibold text-white mb-4">1. Aceptación de los Términos</h2>
          <p className="text-gray-300 mb-4">
            Al acceder y utilizar RoutineCraft, aceptas estar legalmente obligado por estos Términos y Condiciones. 
            Si no estás de acuerdo con alguno de estos términos, no utilices nuestra plataforma.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. Cambios en los Términos</h2>
          <p className="text-gray-300 mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Publicaremos los términos 
            actualizados en esta página. Es tu responsabilidad revisar periódicamente estos Términos y Condiciones.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Uso de la Plataforma</h2>
          <p className="text-gray-300 mb-4">
            Al utilizar nuestra plataforma, aceptas:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Proporcionar información precisa y completa durante el registro</li>
            <li>Mantener la seguridad de tu cuenta y contraseña</li>
            <li>No utilizar la plataforma para fines ilegales o no autorizados</li>
            <li>No intentar acceder a áreas restringidas de la plataforma</li>
            <li>No interferir con el funcionamiento de la plataforma</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Cuentas y Membresías</h2>
          <p className="text-gray-300 mb-4">
            RoutineCraft ofrece diferentes planes de membresía, cada uno con características específicas. Los detalles 
            de cada plan están disponibles en nuestra 
            <Link to="/planes" className="text-blue-400 hover:text-blue-300 mx-1">
              página de planes
            </Link>.
          </p>
          <p className="text-gray-300 mb-4">
            Puedes cancelar tu membresía en cualquier momento. La cancelación será efectiva al final del período 
            de facturación actual.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. Contenido del Usuario</h2>
          <p className="text-gray-300 mb-4">
            Al publicar contenido en nuestra plataforma, nos otorgas una licencia mundial, no exclusiva y libre de 
            regalías para usar, modificar, adaptar y mostrar dicho contenido en relación con los servicios de RoutineCraft.
          </p>
          <p className="text-gray-300 mb-4">
            Eres el único responsable del contenido que publicas y garantizas que tienes todos los derechos necesarios 
            para publicarlo.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Contratación de Entrenadores</h2>
          <p className="text-gray-300 mb-4">
            RoutineCraft facilita la conexión entre usuarios y entrenadores, pero no es responsable de las interacciones 
            o acuerdos entre ellos. Cualquier acuerdo entre un usuario y un entrenador es exclusivamente entre esas partes.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">7. Responsabilidad y Exenciones</h2>
          <p className="text-gray-300 mb-4">
            La plataforma se proporciona "tal cual" y "según disponibilidad". No garantizamos que la plataforma esté 
            libre de errores o que el acceso sea continuo e ininterrumpido.
          </p>
          <p className="text-gray-300 mb-4">
            No somos responsables de las lesiones o daños que puedan resultar del uso de nuestra plataforma o de 
            seguir los ejercicios y rutinas proporcionados.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">8. Contacto</h2>
          <p className="text-gray-300 mb-4">
            Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos en: 
            <a href="mailto:legal@routinecraft.com" className="text-blue-400 hover:text-blue-300 ml-1">
              legal@routinecraft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
