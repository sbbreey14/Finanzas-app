import { Route, Routes } from "react-router-dom";
import { NavBar } from "./ui/dashboard/NavBar";
import { FinanzasProvider } from "./context/FinanzasContext";

// Archivo barril para views.
import { Menu, Dashboard, Finanzas, NotFound, Profile } from "./views";

export const App = () => {
  return (
    <FinanzasProvider>
      <div className="flex h-screen">
        {/* Sidebar - fijo a la izquierda */}
        <div className="flex-shrink-0 p-4">
          <NavBar />
        </div>
        
        {/* Área de contenido principal - ocupa el resto del espacio */}
        <div className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Menu />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/finanzas" element={<Finanzas />}/>
            <Route path="/perfil" element={<Profile />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </FinanzasProvider>
  );
};