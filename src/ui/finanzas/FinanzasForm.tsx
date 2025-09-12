
import { type Categoria } from "../../hooks/useFinanzasForm";

interface FinanzasFormProps {
  formData: {
    nombreServicio: string;
    monto: number;
    fecha: string;
    categoria: Categoria;
  };
  editID: string | null;
  handleInputChange: (field: string, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCancel: () => void;
}

export const FinanzasForm = ({
  formData,
  editID,
  handleInputChange,
  onSubmit,
  handleCancel,
}: FinanzasFormProps) => {


  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg h-fit"
      onSubmit={onSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Agregar Servicio Básico
      </h2>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Nombre del Servicio
        </label>
        <input
          value={formData.nombreServicio}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          placeholder="Ej: Electricidad, Agua, Gas..."
          onChange={(e) => handleInputChange("nombreServicio", e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Monto
        </label>
        <input
          value={formData.monto}
          type="number"
          step="0.01"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          placeholder="0.00"
          onChange={(e) => handleInputChange("monto", parseInt(e.target.value))}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Fecha
        </label>
        <input
          value={formData.fecha}
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          onChange={(e) => handleInputChange("fecha", e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Categoría
        </label>
        <select
          value={formData.categoria}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
          onChange={(e) =>
            handleInputChange("categoria", e.target.value as Categoria)
          }
        >
          <option value="servicios_publicos">Servicios Basicos</option>
          <option value="internet/telefonia">Internet/Telefonía</option>
          <option value="seguros">Seguros</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="otros">Otros</option>
        </select>
      </div>

      {editID ? (
        <div className="flex gap-10">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-3 text-center transition-colors duration-200"
          >
            Editar servicio
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-60 text-center transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3 text-center transition-colors duration-200"
        >
          Agregar Servicio
        </button>
      )}
    </form>
  );
};