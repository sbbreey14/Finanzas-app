
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, type ChartOptions } from 'chart.js';
import { useFinanzas } from '../context/FinanzasContext';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Dashboard = () => {
  const { 
    finanzas, 
    formattedTotal, 
    getChartData, 
    getStatsByCategory,
    totalAmount 
  } = useFinanzas();

  const chartData = getChartData();
  const categoryStats = getStatsByCategory();

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: window.innerWidth < 640 ? 12 : 14
          }
        }
      },
      title: { 
        display: true, 
        text: 'Gastos Mensuales',
        font: {
          size: window.innerWidth < 640 ? 14 : 16
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          },
          callback: function(value) {
            return new Intl.NumberFormat('es-CL', {
              style: 'currency',
              currency: 'CLP',
              minimumFractionDigits: 0,
            }).format(value as number);
          }
        }
      }
    },
    elements: {
      point: {
        radius: window.innerWidth < 640 ? 3 : 5
      }
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Dashboard Financiero
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Resumen de tus gastos y servicios básicos
        </p>
      </div>

      {/* Stats Cards - Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Gastos</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{formattedTotal}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 sm:p-3 rounded-full bg-green-100 text-green-600 mr-3 sm:mr-4 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Servicios Registrados</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{finanzas.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border sm:col-span-2 lg:col-span-1">
          <div className="flex items-center">
            <div className="p-2 sm:p-3 rounded-full bg-purple-100 text-purple-600 mr-3 sm:mr-4 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Promedio por Servicio</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                {finanzas.length > 0 ? 
                  new Intl.NumberFormat('es-CL', { 
                    style: 'currency', 
                    currency: 'CLP',
                    minimumFractionDigits: 0
                  }).format(totalAmount / finanzas.length)
                  : '$0'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section - Responsivo */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Tendencia de Gastos
        </h2>
        {finanzas.length > 0 ? (
          <div className="h-64 sm:h-80 lg:h-96">
            <Line data={chartData} options={options} />
          </div>
        ) : (
          <div className="h-64 sm:h-80 lg:h-96 flex items-center justify-center text-gray-500">
            <div className="text-center px-4">
              <svg className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-base sm:text-lg font-medium">No hay datos para mostrar</p>
              <p className="text-sm">Agrega algunos servicios para ver el gráfico</p>
            </div>
          </div>
        )}
      </div>

      {/* Category Breakdown - Responsivo */}
      {Object.keys(categoryStats).length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Gastos por Categoría
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(categoryStats).map(([category, amount]) => (
              <div key={category} className="flex items-center justify-between py-2">
                <div className="flex items-center min-w-0 flex-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 capitalize truncate">
                    {category.replace('_', ' ').replace('/', ' / ')}
                  </span>
                </div>
                <span className="font-semibold text-sm sm:text-base text-gray-900 ml-2 flex-shrink-0">
                  {new Intl.NumberFormat('es-CL', {
                    style: 'currency',
                    currency: 'CLP',
                    minimumFractionDigits: 0,
                  }).format(amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};