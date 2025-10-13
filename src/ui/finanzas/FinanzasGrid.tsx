
interface Props {
    id: string;
    nombreServicio: string;
    monto: number;
    fecha: string;
    categoria: string;
    handleDelete: (id:string)=>void;
    handleEdit: (id:string)=>void;
}

export const FinanzasGrid = ({ id, nombreServicio, monto, fecha, categoria, handleEdit, handleDelete }: Props) => {
  // Formatear monto
  const formattedAmount = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(monto);

  // Formatear categoría para mostrar
  const displayCategory = categoria.replace('_', ' ').replace('/', ' / ');

  return (
    <tr className="bg-white border-b hover:bg-gray-50 transition-colors duration-150">
      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900">
        <div className="truncate max-w-xs">
          {nombreServicio}
        </div>
      </td>
      
      <td className="px-4 sm:px-6 py-3 sm:py-4 text-green-600 font-semibold">
        {formattedAmount}
      </td>
      
      <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600">
        <div className="text-sm">
          {new Date(fecha + 'T00:00:00').toLocaleDateString('es-CL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </div>
      </td>
      
      <td className="px-4 sm:px-6 py-3 sm:py-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
          {displayCategory}
        </span>
      </td>
      
      <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
        <div className="flex items-center justify-end space-x-2">
          <button
            onClick={() => handleEdit(id)}
            className="inline-flex items-center p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            title="Editar servicio"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          
          <button
            onClick={() => handleDelete(id)}
            className="inline-flex items-center p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            title="Eliminar servicio"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};