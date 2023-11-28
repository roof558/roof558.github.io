import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SiderbarContext = createContext()
export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <aside className={`h-screen ${expanded ? 'w-64' : 'w-16'} transition-all duration-300`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" className={`overflow-hidden transition-all ${
                        expanded ? "w-32" : "w-0"
                    }`} alt="" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst />: <ChevronLast/>}
                    </button>
                </div>

                <SiderbarContext.Provider value={{ expanded }}>
                    
                
                <ul className="flex-1 px-3">
                    { children }
                </ul>
                </SiderbarContext.Provider>                
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, path, active, alent }) {
    const {expanded} = useContext(SiderbarContext)
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    };

    return (
        <li className={`
            relative flex items-center py-2 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
        `} onClick={handleNavigate}>
            {icon}
            <span className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
            }`}>{text}</span>
            {alent && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}/>}

            {!expanded && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 
                bg-indigo-100 text-indigo-800 text-sm 
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>}
        </li>
    );
}
