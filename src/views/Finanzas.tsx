
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header con título principal */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestiona tus cuentas
          </h1>
          <p className="text-gray-600">
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

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Mensual</p>
                <p className="text-2xl font-bold text-gray-900">{formattedTotal}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Servicios Activos</p>
                <p className="text-2xl font-bold text-gray-900">{finanzas.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Promedio por Servicio</p>
                <p className="text-2xl font-bold text-gray-900">
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

        {/* Tabla mejorada */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Servicios Básicos
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Lista completa de tus servicios y gastos mensuales
                </p>
              </div>
              {finanzas.length > 0 && (
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-lg font-bold text-gray-900">{formattedTotal}</p>
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            {finanzas.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay servicios</h3>
                <p className="mt-1 text-sm text-gray-500">Comienza agregando tu primer servicio básico.</p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
