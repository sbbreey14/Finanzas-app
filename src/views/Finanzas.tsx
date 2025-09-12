import { useReducer, useState } from "react";

// UUID
import { v4 as uuidv4 } from "uuid";

// Componets
import { FinanzasReducer, initialState } from "../hooks/finanzasReducer";

type Categoria =
  | "servicios_publicos"
  | "internet/telefonia"
  | "seguros"
  | "suscripciones"
  | "otros";

export const Finanzas = () => {
  const [nombreServicio, setNombreServicio] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("servicios_publicos");
  const [editID, setEditId] = useState<string | null>(null);

  const [state, dispatch] = useReducer(FinanzasReducer, initialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombreServicio.trim()) return;
    if (!isNaN(Number(nombreServicio))) return;
    if (monto === 0) return;
    if (!fecha) return;

    if (editID) {
      dispatch({
        type: "EDIT_FINANZAS",
        payload: {
          id: editID,
          nombreServicio,
          monto,
          fecha,
          categoria,
        },
      });
      setEditId(null);
    } else {
      const newFi = {
        id: uuidv4(),
        nombreServicio,
        monto,
        fecha,
        categoria,
      };
      dispatch({
        type: "ADD_FINANZAS",
        payload: newFi,
      });
    }

    setNombreServicio("");
    setMonto(0);
    setFecha("");
    setCategoria("servicios_publicos");
  };

  const handleDelete = (id: string) => {
    dispatch({
      type: "DELETE_FINANZAS",
      payload: id,
    });
  };

  const handleEdit = (id: string) => {
    const find = state.finanzas.find((finanza) => finanza.id === id);
    setNombreServicio(find!.nombreServicio);
    setMonto(find!.monto);
    setFecha(find!.fecha);
    setCategoria(find!.categoria as Categoria);
    setEditId(find?.id ?? null);
  };

  const suma = state.finanzas.reduce((total, item) => total + item.monto, 0);
  const sumaCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0, // Opcional: los pesos chilenos normalmente no tienen decimales
  }).format(suma);

  return (
    <div className="flex gap-8 w-full h-full">
      {/* Columna izquierda - Formulario */}
      <div className="w-1/2">
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
              value={nombreServicio}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Ej: Electricidad, Agua, Gas..."
              onChange={(e) => setNombreServicio(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Monto
            </label>
            <input
              value={monto}
              type="number"
              step="0.01"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="0.00"
              onChange={(e) => setMonto(parseInt(e.target.value))}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Fecha
            </label>
            <input
              value={fecha}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Categoría
            </label>
            <select
              value={categoria}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              onChange={(e) => setCategoria(e.target.value as Categoria)}
            >
              <option value="servicios_publicos">Servicios Públicos</option>
              <option value="internet/telefonia">Internet/Telefonía</option>
              <option value="seguros">Seguros</option>
              <option value="suscripciones">Suscripciones</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3 text-center transition-colors duration-200"
          >
            Agregar Servicio
          </button>
        </form>
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
                {/* Ejemplo de filas - esto será dinámico */}
                {state.finanzas.map((finanza) => (
                  <tr
                    key={finanza.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {finanza.nombreServicio}
                    </td>
                    <td className="px-6 py-4">${finanza.monto}</td>
                    <td className="px-6 py-4">{finanza.fecha}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {finanza.categoria}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="text-blue-600 hover:text-blue-900 mr-2"
                        onClick={() => handleEdit(finanza.id)}
                      >
                        Editar
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(finanza.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
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
