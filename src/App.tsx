import { Route, Routes } from "react-router-dom";
import { NavBar } from "./ui/dashboard/NavBar";
import { Menu } from "./views/Menu";
import { Dashboard } from "./views/Dashboard";
import { Finanzas } from "./views/Finanzas";
import { Profile } from "./views/Profile";

export const App = () => {
  return (
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
        </Routes>
      </div>
    </div>
  );
};