
import { useFinanzas } from "../context/FinanzasContext";
import { FinanzasForm } from "../ui/finanzas/FinanzasForm";
import { FinanzasGrid } from "../ui/finanzas/FinanzasGrid";


export const Finanzas = () => {
  
  const { 
    formData,
    editID,
    handleInputChange,
    onSubmit,
    handleCancel,
    finanzas, 
    handleDelete, 
    handleEdit, 
    formattedTotal,
    totalAmount
  } = useFinanzas();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header con título principal */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Gestiona tus cuentas
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Administra tus pagos en un solo lugar
        </p>
      </div>

      {/* Formulario compacto */}
      <div className="bg-white rounded-lg shadow-sm border">
        <FinanzasForm 
          formData={formData}
          editID={editID}
          handleInputChange={handleInputChange}
          onSubmit={onSubmit}
          handleCancel={handleCancel}
        />
      </div>

      {/* Estadísticas rápidas - Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Mensual</p>
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
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Servicios Activos</p>
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

      {/* Tabla/Cards responsivas */}
      <div className="bg-white rounded-lg shadow-sm border">
        {/* Header de la sección */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Servicios Básicos
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Lista completa de tus servicios y gastos mensuales
              </p>
            </div>
            {finanzas.length > 0 && (
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-lg font-bold text-gray-900">{formattedTotal}</p>
              </div>
            )}
          </div>
        </div>

        {/* Contenido - Tabla en desktop, cards en móvil */}
        {finanzas.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <svg className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No hay servicios</h3>
            <p className="mt-1 text-sm text-gray-500">Comienza agregando tu primer servicio básico.</p>
          </div>
        ) : (
          <>
            {/* Vista móvil - Cards */}
            <div className="block md:hidden">
              <div className="divide-y divide-gray-200">
                {finanzas.map((finanza) => (
                  <div key={finanza.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {finanza.nombreServicio}
                        </h3>
                        <p className="text-lg font-bold text-green-600">
                          {new Intl.NumberFormat('es-CL', {
                            style: 'currency',
                            currency: 'CLP',
                            minimumFractionDigits: 0,
                          }).format(finanza.monto)}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-2">
                        <button
                          onClick={() => handleEdit(finanza.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(finanza.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Fecha:</span>
                        <p className="text-gray-900">{finanza.fecha}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Categoría:</span>
                        <p className="text-gray-900 capitalize">{finanza.categoria.replace('_', ' ')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vista desktop - Tabla */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Servicio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Emisión
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {finanzas.map((finanza) => (
                    <FinanzasGrid 
                      key={finanza.id}
                      id={finanza.id} 
                      nombreServicio={finanza.nombreServicio} 
                      monto={finanza.monto} 
                      fecha={finanza.fecha} 
                      categoria={finanza.categoria} 
                      handleEdit={() => handleEdit(finanza.id)} 
                      handleDelete={() => handleDelete(finanza.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
