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
import axios from 'axios';

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
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const metricOptions = [
    { key: 'peso', label: 'Peso (kg)' },
    { key: 'grasa', label: 'Porcentaje de grasa (%)' },
    { key: 'musculo', label: 'Masa muscular (kg)' },
    { key: 'cintura', label: 'Cintura (cm)' },
    { key: 'cadera', label: 'Cadera (cm)' }
  ];

  // Verificar y cargar datos de usuario cuando el componente se monta
  useEffect(() => {
    const uid = localStorage.getItem('usuarioId');
    if (uid) {
      setUserId(uid);
      fetchMetrics(uid); // Cargar métricas del usuario
    } else {
      setLoading(false);
      setError('Usuario no identificado. Por favor, inicia sesión nuevamente.');
    }
  }, []);

  // Función para cargar métricas del usuario desde el servidor
  const fetchMetrics = async (uid) => {
    setLoading(true);
    try {
      if (!uid) {
        setMetrics([]);
        return;
      }
      // Realizar solicitud HTTP para obtener métricas con token de autorización
      const response = await axios.get(`http://localhost:5000/api/metrics/${uid}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      
      // Procesar respuesta exitosa
      if (response.status === 200) {
        setMetrics(response.data);
      } else {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al cargar métricas:', error);
      setError('No se pudieron cargar las métricas. Verifica tu conexión.');
      setMetrics([]);
    } finally {
      setLoading(false);
    }
  };

  // Función para añadir una nueva métrica de progreso
  const addMetric = async () => {
    // Validar entrada del usuario
    if (!newEntry.valor || isNaN(parseFloat(newEntry.valor))) {
      setError('Por favor ingresa un valor numérico válido');
      return;
    }
    
    if (!userId) {
      setError('Usuario no identificado');
      return;
    }
    
    // Reiniciar estados de UI
    setError('');
    setSaveSuccess(false);
    
    try {
      // Preparar datos para enviar al servidor
      const metricData = {
        userId: userId,
        tipo: activeMetric,
        valor: parseFloat(newEntry.valor),
        fecha: newEntry.fecha
      };
      
      console.log('Enviando métrica:', metricData);
      
      // Enviar solicitud POST para guardar la nueva métrica
      const response = await axios.post('http://localhost:5000/api/metrics', metricData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      
      // Procesar respuesta exitosa
      if (response.status === 201 || response.status === 200) {
        setMetrics([...metrics, response.data]);
        setNewEntry({ valor: '', fecha: new Date().toISOString().split('T')[0] });
        setSaveSuccess(true);
        
        fetchMetrics(userId);
      } else {
        throw new Error(`Error al guardar: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al añadir métrica:', error);
      setError(error.response?.data?.message || 'Error al guardar la métrica');
    }
  };

  const prepareChartData = () => {
    const filteredMetrics = metrics.filter(m => m.tipo === activeMetric);
    filteredMetrics.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    const metricLabel = metricOptions.find(opt => opt.key === activeMetric)?.label || activeMetric;
    return {
      labels: filteredMetrics.map(m => new Date(m.fecha).toLocaleDateString()),
      datasets: [{
        label: metricLabel,
        data: filteredMetrics.map(m => m.valor),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }]
    };
  };

  if (loading) {
    return (
      <div className="relative bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
        <div className="relative z-10 p-6 max-w-7xl mx-auto text-center">
          <div className="text-center py-8 text-white">Cargando datos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-gray-900"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Seguimiento de Progreso</h1>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 p-4 rounded mb-6">
            {error}
          </div>
        )}
        
        {saveSuccess && (
          <div className="bg-green-500/20 border border-green-500 text-green-100 p-4 rounded mb-6">
            ¡Métrica guardada con éxito!
          </div>
        )}
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {metricOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setActiveMetric(opt.key)}
                className={`px-4 py-2 rounded ${activeMetric === opt.key ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
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
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Añadir nuevo registro</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Tipo de métrica</label>
              <select
                value={activeMetric}
                onChange={e => setActiveMetric(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
              >
                {metricOptions.map(opt => (
                  <option key={opt.key} value={opt.key}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Valor</label>
              <input
                type="number"
                value={newEntry.valor}
                onChange={e => setNewEntry({ ...newEntry, valor: e.target.value })}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
                placeholder="Ingresa el valor"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Fecha</label>
              <input
                type="date"
                value={newEntry.fecha}
                onChange={e => setNewEntry({ ...newEntry, fecha: e.target.value })}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
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
          {userId ? (
            <p className="text-gray-400 text-sm mt-2">ID de usuario: {userId}</p>
          ) : (
            <p className="text-red-400 text-sm mt-2">Usuario no identificado</p>
          )}
        </div>
      </div>
    </div>
  );
}
