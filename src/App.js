import React, { useRef } from "react";
import Sidebar, { SidebarItem } from "./components/Sidebar/Sidebar";
import { LayoutDashboard, UserCircle, FolderOpenDot, Phone } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const scrollElement = useRef(null);

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Home" path="home" scrollElement={scrollElement}/>
        <SidebarItem icon={<UserCircle size={20} />} text="About" path="about" scrollElement={scrollElement}/>
        <SidebarItem icon={<FolderOpenDot size={20} />} text="Project" path="project" scrollElement={scrollElement}/>
        <SidebarItem icon={<Phone size={20} />} text="Contact" path="contact" scrollElement={scrollElement}/>
      </Sidebar>
      <div className="flex overflow-x-auto" ref={scrollElement}>
        <div className="min-w-screen flex-shrink-0" id="home">
          <Home />
        </div>
        <div className="min-w-screen flex-shrink-0" id="about">
          <About />
        </div>
        <div className="min-w-screen flex-shrink-0" id="project">
          <Project />
        </div>
        <div className="min-w-screen flex-shrink-0" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
