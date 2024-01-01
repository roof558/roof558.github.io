import { createContext } from "react";

const SiderbarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className={`h-screen w-52 transition-all duration-300 fixed`}>
      <nav className="h-full flex flex-col bg-purple-200 border-r shadow-sm">
        <SiderbarContext.Provider value={true}>
          <ul className="flex-1 px-3 flex flex-col items-center justify-center">{children}</ul>
        </SiderbarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, path, active, alent, scrollElement }) {
  const scrollPage = (pageId) => {
    const pageElement = document.getElementById(pageId);

    if (pageElement && scrollElement.current) {
      pageElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', 
        inline: 'start', 
      });
    }
  };

  return (
    <li
      className={`
        relative flex items-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group scrollPage w-48
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      onClick={() => scrollPage(path)}
    >
      {icon}
      <span className={`overflow-hidden transition-all w-48 ml-1`}>{text}</span>
      {alent && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />}
    </li>
  );
}