import React from "react";
import Sidebar, { SidebarItem } from "./components/Sidebar/Sidebar";
import { LayoutDashboard, UserCircle, FolderOpenDot, Phone } from "lucide-react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <>
    <div className="app">
        <div>
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Home" path="#home"/>
            <SidebarItem icon={<UserCircle size={20} />} text="About" path="#about" offset={-100}/>
            <SidebarItem icon={<FolderOpenDot size={20} />} text="Project" path="#project" offset={-100}/>
            <SidebarItem icon={<Phone size={20} />} text="Contact" path="#contact" offset={-150} />
          </Sidebar>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>
            <Home />
          </div>
          <div style={{ flex: 1 }}>
            <About />
          </div>
          <div style={{ flex: 1 }}>
            <Project />
          </div>
          <div style={{ flex: 1 }}>
            <Contact />
          </div>
        </div>
      </div>
        
      
    </>
  );
}

export default App;
