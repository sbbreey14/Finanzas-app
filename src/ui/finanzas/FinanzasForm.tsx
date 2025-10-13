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
      className="p-4 sm:p-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">
        {editID ? "Editar Servicio" : "Agregar Nuevo Servicio"}
      </h2>

      {/* Grid responsivo del formulario */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {/* Nombre del Servicio - Ocupa más espacio */}
        <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Nombre del Servicio
          </label>
          <input
            value={formData.nombreServicio}
            type="text"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors duration-200"
            placeholder="Ej: Electricidad, Agua, Gas..."
            onChange={(e) => handleInputChange("nombreServicio", e.target.value)}
          />
        </div>

        {/* Monto */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Monto ($)
          </label>
          <input
            value={formData.monto || ''}
            type="number"
            step="1"
            min="0"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors duration-200"
            placeholder="15000"
            onChange={(e) => handleInputChange("monto", parseInt(e.target.value) || 0)}
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Fecha de Emisión
          </label>
          <input
            value={formData.fecha}
            type="date"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors duration-200"
            onChange={(e) => handleInputChange("fecha", e.target.value)}
          />
        </div>

        {/* Categoría */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            value={formData.categoria}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors duration-200"
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

      {/* Botones de acción - Responsivos */}
      <div className="flex flex-col sm:flex-row gap-3">
        {editID ? (
          <>
            <button
              type="submit"
              className="w-full sm:w-auto text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Actualizar Servicio
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Agregar Servicio
          </button>
        )}
      </div>
    </form>
  );
};