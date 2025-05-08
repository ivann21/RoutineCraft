export default function PlansPage() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">Nuestros Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Gratis */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Gratis</h3>
            <p className="text-gray-300 mb-6">Crea hasta 10 rutinas</p>
            <p className="text-4xl font-extrabold text-white mb-6">$0</p>
            <a 
              href="#" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </a>
          </div>

          {/* Plan Básico */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Básico</h3>
            <p className="text-gray-300 mb-6">Crea hasta 50 rutinas</p>
            <p className="text-4xl font-extrabold text-white mb-6">€5/mes</p>
            <a 
              href="#" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </a>
          </div>

          {/* Plan Premium */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Premium</h3>
            <p className="text-gray-300 mb-6">Rutinas ilimitadas</p>
            <p className="text-4xl font-extrabold text-white mb-6">€10/mes</p>
            <a 
              href="#" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Elegir plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}