import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Progress() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMetric, setActiveMetric] = useState('peso');
  const [newEntry, setNewEntry] = useState({ valor: '', fecha: new Date().toISOString().split('T')[0] });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      // Datos de ejemplo para mostrar hasta que implementemos el endpoint
      const mockMetrics = [
        { id: 1, tipo: 'peso', valor: 75, fecha: '2023-10-01' },
        { id: 2, tipo: 'peso', valor: 74.5, fecha: '2023-10-08' },
        { id: 3, tipo: 'peso', valor: 73.8, fecha: '2023-10-15' },
        { id: 4, tipo: 'peso', valor: 73.2, fecha: '2023-10-22' },
        { id: 5, tipo: 'fuerza', valor: 80, fecha: '2023-10-01' },
        { id: 6, tipo: 'fuerza', valor: 85, fecha: '2023-10-08' },
        { id: 7, tipo: 'fuerza', valor: 85, fecha: '2023-10-15' },
        { id: 8, tipo: 'fuerza', valor: 90, fecha: '2023-10-22' },
        { id: 9, tipo: 'resistencia', valor: 15, fecha: '2023-10-01' },
        { id: 10, tipo: 'resistencia', valor: 17, fecha: '2023-10-08' },
        { id: 11, tipo: 'resistencia', valor: 18, fecha: '2023-10-15' },
        { id: 12, tipo: 'resistencia', valor: 20, fecha: '2023-10-22' },
      ];
      
      setMetrics(mockMetrics);
    } catch (error) {
      console.error('Error al cargar métricas:', error);
    } finally {
      setLoading(false);
    }
  };

  const addMetric = async () => {
    if (!newEntry.valor) return;
    
    try {
      // Simulamos añadir una métrica
      const newMetric = {
        id: metrics.length + 1,
        tipo: activeMetric,
        valor: parseFloat(newEntry.valor),
        fecha: newEntry.fecha
      };
      
      setMetrics([...metrics, newMetric]);
      setNewEntry({ valor: '', fecha: new Date().toISOString().split('T')[0] });
    } catch (error) {
      console.error('Error al añadir métrica:', error);
    }
  };

  const prepareChartData = () => {
    const filteredMetrics = metrics.filter(m => m.tipo === activeMetric);
    filteredMetrics.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    
    return {
      labels: filteredMetrics.map(m => new Date(m.fecha).toLocaleDateString()),
      datasets: [{
        label: activeMetric.charAt(0).toUpperCase() + activeMetric.slice(1),
        data: filteredMetrics.map(m => m.valor),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }]
    };
  };

  if (loading) {
    return <div className="text-center py-8 text-white">Cargando datos...</div>;
  }

  return (
    <div className="bg-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Seguimiento de Progreso</h1>
        
        <div className="bg-gray-700 rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button 
              onClick={() => setActiveMetric('peso')}
              className={`px-4 py-2 rounded ${activeMetric === 'peso' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            >
              Peso
            </button>
            <button 
              onClick={() => setActiveMetric('fuerza')}
              className={`px-4 py-2 rounded ${activeMetric === 'fuerza' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            >
              Fuerza
            </button>
            <button 
              onClick={() => setActiveMetric('resistencia')}
              className={`px-4 py-2 rounded ${activeMetric === 'resistencia' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            >
              Resistencia
            </button>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            {metrics.filter(m => m.tipo === activeMetric).length > 0 ? (
              <Line 
                data={prepareChartData()} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: 'white'
                      }
                    },
                    tooltip: {
                      backgroundColor: 'rgba(50, 50, 50, 0.8)',
                      titleColor: 'white',
                      bodyColor: 'white'
                    }
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                      },
                      ticks: {
                        color: 'white'
                      }
                    },
                    y: {
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                      },
                      ticks: {
                        color: 'white'
                      }
                    }
                  }
                }}
              />
            ) : (
              <p className="text-center text-gray-400 py-8">No hay datos para mostrar</p>
            )}
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Añadir nuevo registro</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Valor</label>
              <input 
                type="number" 
                value={newEntry.valor}
                onChange={(e) => setNewEntry({...newEntry, valor: e.target.value})}
                className="bg-gray-800 text-white px-4 py-2 rounded"
                placeholder="Ingresa el valor"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Fecha</label>
              <input 
                type="date" 
                value={newEntry.fecha}
                onChange={(e) => setNewEntry({...newEntry, fecha: e.target.value})}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={addMetric}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
