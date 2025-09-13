import { createContext, useContext, useReducer, useState } from "react";
import type { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { FinanzasReducer, initialState } from "../hooks/finanzasReducer";

export type Categoria =
  | "servicios_basicos"
  | "internet/telefonia"
  | "seguros"
  | "suscripciones"
  | "otros";

interface StateProps {
  id: string;
  nombreServicio: string;
  monto: number;
  fecha: string;
  categoria: string;
}

interface FinanzasContextType {
  // State
  finanzas: StateProps[];
  formData: {
    nombreServicio: string;
    monto: number;
    fecha: string;
    categoria: Categoria;
  };
  editID: string | null;

  // Actions
  handleInputChange: (field: string, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleCancel: () => void;

  // Computed values
  totalAmount: number;
  formattedTotal: string;

  // Chart data
  getChartData: () => {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
    }[];
  };

  // Statistics
  getStatsByCategory: () => { [key: string]: number };
  getMonthlyData: () => { [key: string]: number };
}

const FinanzasContext = createContext<FinanzasContextType | undefined>(
  undefined
);

interface FinanzasProviderProps {
  children: ReactNode;
}

export const FinanzasProvider = ({ children }: FinanzasProviderProps) => {
  const [formData, setFormData] = useState({
    nombreServicio: "",
    monto: 0,
    fecha: "",
    categoria: "servicios_basicos" as Categoria,
  });
  const [editID, setEditId] = useState<string | null>(null);
  const [state, dispatch] = useReducer(FinanzasReducer, initialState);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombreServicio.trim()) return;
    if (!isNaN(Number(formData.nombreServicio))) return;
    if (formData.monto === 0) return;
    if (!formData.fecha) return;

    if (editID) {
      dispatch({
        type: "EDIT_FINANZAS",
        payload: {
          id: editID,
          ...formData,
        },
      });
      setEditId(null);
    } else {
      const newFi = {
        id: uuidv4(),
        ...formData,
      };
      dispatch({
        type: "ADD_FINANZAS",
        payload: newFi,
      });
    }

    setFormData({
      nombreServicio: "",
      monto: 0,
      fecha: "",
      categoria: "servicios_basicos",
    });
  };

  const handleDelete = (id: string) => {
    dispatch({
      type: "DELETE_FINANZAS",
      payload: id,
    });
  };

  const handleEdit = (id: string) => {
    const find = state.finanzas.find((finanza) => finanza.id === id);
    if (find) {
      setFormData({
        nombreServicio: find.nombreServicio,
        monto: find.monto,
        fecha: find.fecha,
        categoria: find.categoria as Categoria,
      });
      setEditId(find.id);
    }
  };

  const handleCancel = () => {
    setFormData({
      nombreServicio: "",
      monto: 0,
      fecha: "",
      categoria: "servicios_basicos",
    });
    setEditId(null);
  };

  const totalAmount = state.finanzas.reduce(
    (total, item) => total + item.monto,
    0
  );
  const formattedTotal = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(totalAmount);


  const getChartData = () => {
    const monthlyData = getMonthlyData();
    const labels = Object.keys(monthlyData).sort();
    const data = labels.map((month) => monthlyData[month] || 0);

    return {
      labels,
      datasets: [
        {
          label: "Gastos Mensuales",
          data,
          borderColor: "rgba(59, 130, 246, 1)",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.4,
        },
      ],
    };
  };

  const getStatsByCategory = () => {
    const stats: { [key: string]: number } = {};
    state.finanzas.forEach((finanza) => {
      const category = finanza.categoria;
      stats[category] = (stats[category] || 0) + finanza.monto;
    });
    return stats;
  };

  const getMonthlyData = () => {
    const monthlyData: { [key: string]: number } = {};
    state.finanzas.forEach((finanza) => {
      const date = new Date(finanza.fecha);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      monthlyData[monthKey] = (monthlyData[monthKey] || 0) + finanza.monto;
    });
    return monthlyData;
  };

  const value: FinanzasContextType = {
    // State
    finanzas: state.finanzas,
    formData,
    editID,

    // Actions
    handleInputChange,
    onSubmit,
    handleDelete,
    handleEdit,
    handleCancel,

    // Computed values
    totalAmount,
    formattedTotal,

    // Chart data
    getChartData,

    // Statistics
    getStatsByCategory,
    getMonthlyData,
  };

  return (
    <FinanzasContext.Provider value={value}>
      {children}
    </FinanzasContext.Provider>
  );
};

// Custom hook to use the context
export const useFinanzas = () => {
  const context = useContext(FinanzasContext);
  if (context === undefined) {
    throw new Error("useFinanzas tiene que ser usado con FinanzasProvider");
  }
  return context;
};
