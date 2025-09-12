import { useReducer, useState } from "react";

// UUID
import { v4 as uuidv4 } from "uuid";

// Components
import { FinanzasReducer, initialState } from "../hooks/finanzasReducer";

export type Categoria =
  | "servicios_basicos"
  | "internet/telefonia"
  | "seguros"
  | "suscripciones"
  | "otros";

export const useFinanzasForm = () => {
  const [formData, setFormData] = useState({
    nombreServicio: "",
    monto: 0,
    fecha: "",
    categoria: "servicios_basicos" as Categoria
  });
  const [editID, setEditId] = useState<string | null>(null);

  const [state, dispatch] = useReducer(FinanzasReducer, initialState);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
    setFormData({
      nombreServicio: find!.nombreServicio,
      monto: find!.monto,
      fecha: find!.fecha,
      categoria: find!.categoria as Categoria
    });
    setEditId(find?.id ?? null);
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

  const suma = state.finanzas.reduce((total, item) => total + item.monto, 0);
  const sumaCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(suma);

  return {
    // State values
    formData,
    editID,
    state,
    
    // Functions
    handleInputChange,
    onSubmit,
    handleDelete,
    handleEdit,
    handleCancel,

    // Computed values
    sumaCLP,
  };
};
