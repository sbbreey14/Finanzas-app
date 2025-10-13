import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTripOrigin } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const navItems = [
    { title: 'Main', navigate: '/', icons: <MdOutlineTripOrigin />},
    { title: 'Dashboard', navigate: '/dashboard', icons: <MdOutlineSpaceDashboard />},
    { title: 'Finanzas', navigate: '/finanzas', icons: <FaMoneyBillAlt />},
    { title: 'Perfil', navigate: '/perfil', icons: <CgProfile />},
]

export const NavBar = () => {
  const { closeSidebar } = useSidebar();
  const location = useLocation();

  const handleLinkClick = () => {
    // Cerrar sidebar en móvil al hacer click en un link
    closeSidebar();
  };

  return (
    <div className="relative flex h-full w-full lg:max-w-[20rem] max-w-[16rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-800 shadow-xl shadow-blue-gray-900/5">
      {/* Header del sidebar */}
      <div className="p-2 lg:p-4 mb-2">
        <h5 className="block font-sans text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Dashboard
        </h5>
      </div>
      
      {/* Navegación */}
      <nav className="flex min-w-0 flex-col gap-1 p-2 font-sans text-lg lg:text-2xl font-normal text-blue-gray-700">
        {navItems.map(nav => (
          <Link
            key={nav.title}
            to={nav.navigate}
            onClick={handleLinkClick}
            className={`
              flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start 
              ${location.pathname === nav.navigate 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'
              }
            `}
          >
            <div className="grid mr-3 lg:mr-4 place-items-center text-lg lg:text-xl">
              {nav.icons}
            </div>
            <span className="truncate">
              {nav.title}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer del sidebar - solo visible en desktop */}
      <div className="mt-auto p-2 hidden lg:block">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3">
          <p className="text-xs text-blue-600 font-medium">
            Finanzas App v1.0
          </p>
          <p className="text-xs text-blue-500 mt-1">
            Gestiona tus finanzas fácilmente
          </p>
        </div>
      </div>
    </div>
  );
};
