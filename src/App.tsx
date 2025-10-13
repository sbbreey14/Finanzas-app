import { Route, Routes } from "react-router-dom";
import { NavBar } from "./ui/dashboard/NavBar";
import { FinanzasProvider } from "./context/FinanzasContext";
import { SidebarProvider, useSidebar } from "./context/SidebarContext";

// Archivo barril para views.
import { Menu, Dashboard, Finanzas, NotFound, Profile } from "./views";

const AppContent = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:relative lg:translate-x-0 inset-y-0 left-0 z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:flex lg:flex-shrink-0
        `}
      >
        <div className="w-64 lg:w-auto">
          <NavBar />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header móvil con hamburger menu */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">
              Finanzas App
            </h1>
            <div className="w-10"></div> {/* Spacer para centrar el título */}
          </div>
        </div>

        {/* Área de contenido principal */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/finanzas" element={<Finanzas />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <FinanzasProvider>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </FinanzasProvider>
  );
};