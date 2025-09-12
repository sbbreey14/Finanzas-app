
import { useFinanzasForm } from "../hooks/useFinanzasForm";
import { FinanzasForm } from "../ui/finanzas/FinanzasForm";
import { FinanzasGrid } from "../ui/finanzas/FinanzasGrid";


export const Finanzas = () => {
  
  const { 
    formData,
    editID,
    handleInputChange,
    onSubmit,
    handleCancel,
    state, 
    handleDelete, 
    handleEdit, 
    sumaCLP 
  } = useFinanzasForm();


  return (
    <div className="flex gap-8 w-full h-full">
      {/* Columna izquierda - Formulario */}
      <div className="w-1/2">
        <FinanzasForm 
          formData={formData}
          editID={editID}
          handleInputChange={handleInputChange}
          onSubmit={onSubmit}
          handleCancel={handleCancel}
        />
      </div>

      {/* Columna derecha - Tabla de servicios */}
      <div className="w-1/2">
        <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Servicios Básicos
          </h2>

          {/* Tabla placeholder - aquí irá tu tabla real */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Servicio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Monto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Emision
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categoría
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Grid dinamico */}
                {state.finanzas.map((finanza) => (
                  <FinanzasGrid id={finanza.id} 
                    nombreServicio={finanza.nombreServicio} 
                    monto={finanza.monto} 
                    fecha={finanza.fecha} 
                    categoria={finanza.categoria} 
                    handleEdit={ () => handleEdit(finanza.id) } 
                    handleDelete={() => handleDelete(finanza.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Resumen */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">
                Total mensual:
              </span>
              <span className="text-xl font-bold text-gray-900">{sumaCLP}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
