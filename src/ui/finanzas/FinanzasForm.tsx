import type { Categoria } from "../../context/FinanzasContext";


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
      className="bg-white p-6 rounded-lg shadow-sm border"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-900">
        {editID ? "Editar Servicio" : "Agregar Nuevo Servicio"}
      </h2>

      {/* Formulario horizontal compacto */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Nombre del Servicio
          </label>
          <input
            value={formData.nombreServicio}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ej: Electricidad, Agua..."
            onChange={(e) => handleInputChange("nombreServicio", e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Monto
          </label>
          <input
            value={formData.monto}
            type="number"
            step="0.01"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="0"
            onChange={(e) => handleInputChange("monto", parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Fecha
          </label>
          <input
            value={formData.fecha}
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => handleInputChange("fecha", e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            value={formData.categoria}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              handleInputChange("categoria", e.target.value as Categoria)
            }
          >
            <option value="servicios_publicos">Servicios Básicos</option>
            <option value="internet/telefonia">Internet/Telefonía</option>
            <option value="seguros">Seguros</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-3">
        {editID ? (
          <>
            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 transition-colors duration-200"
            >
              Actualizar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2 transition-colors duration-200"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-2 transition-colors duration-200"
          >
            + Agregar Servicio
          </button>
        )}
      </div>
    </form>
  );
};