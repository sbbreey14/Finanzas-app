import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const navItems = [
    { title: 'Dashboard', icons: <MdOutlineSpaceDashboard />},
    { title: 'Finanzas', icons: <FaMoneyBillAlt />},
    { title: 'Perfil', icons: <CgProfile />},
]

export const NavBar = () => {

  return (
    <div className="relative mt-2 flex h-[calc(130vh-20rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Dashboard
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {
            navItems.map( nav => (
                <div
                role="button"
                key={ nav.title }
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                <div className="grid mr-4 place-items-center">
                    { nav.icons }
                </div>
                { nav.title }
                </div>
            ))
        }
      </nav>
    </div>
  );
};
