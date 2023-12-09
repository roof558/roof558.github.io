import { createContext } from "react";
import { Link } from 'react-scroll';

const SiderbarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className={`h-screen w-64 transition-all duration-300 fixed`}>
      <nav className="h-full flex flex-col bg-purple-200 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center bg-purple-200">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all w-32`}
            alt=""
          />
        </div>

        <SiderbarContext.Provider value={true}>
          <ul className="flex-1 px-3">{children}</ul>
        </SiderbarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, path, active, alent, offset }) {
  return (
    <Link
      to="#home"
      spy={true}
      smooth={true}
      offset={offset}
      duration={100}
      className={`
        relative flex items-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
      `}
    >
      <li>
        {icon}
        <span className={`overflow-hidden transition-all w-52 ml-3`}>{text}</span>
        {alent && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />}
      </li>
    </Link>
  );
}
