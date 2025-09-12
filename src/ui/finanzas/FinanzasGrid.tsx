
interface Props {
    id: string;
    nombreServicio: string;
    monto: number;
    fecha: string;
    categoria: string;
    handleDelete: (id:string)=>void;
    handleEdit: (id:string)=>void;
}

export const FinanzasGrid = ({ id, nombreServicio, monto, fecha, categoria, handleEdit, handleDelete }:Props) => {


    
  return (
    <tr
        key={id}
        className="bg-white border-b hover:bg-gray-50"
        >
        <td className="px-6 py-4 font-medium text-gray-900">
            {nombreServicio}
        </td>
        <td className="px-6 py-4">${monto}</td>
        <td className="px-6 py-4">{fecha}</td>
        <td className="px-6 py-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center justify-center mb-3">
            {categoria}
            </span>
        </td>
        <td className="px-6 py-4 flex items-center justify-center">
            <button
            className="text-blue-600 hover:text-blue-900 mr-2 bg-blue-100 rounded w-20"
            onClick={() => handleEdit(id)}
            >
            Editar
            </button>
            <button
            className="text-red-600 hover:text-red-900  bg-red-100 rounded w-20"
            onClick={() => handleDelete(id)}
            >
            Eliminar
            </button>
        </td>
    </tr>
  );
};