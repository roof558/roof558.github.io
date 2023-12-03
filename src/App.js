import React from "react";
import { ToastContainer } from 'react-toastify';
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { LayoutDashboard, UserCircle, FolderOpenDot, Phone } from "lucide-react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ScrollContainer } from "react-scroll-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex">
          <Sidebar>   
            <SidebarItem 
              icon={<LayoutDashboard size={20}/>}
              text="Home"
              path="/"
              alent
            />
            <SidebarItem icon={<UserCircle size={20}/>} text="About" path="/about" active />
            <SidebarItem icon={<FolderOpenDot size={20}/>} text="Project" path="/project" active />
            <SidebarItem icon={<Phone size={20}/>} text="Contact" path="/contact" active />
          </Sidebar>
          <ScrollContainer>
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="project">
              <Project />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </ScrollContainer>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
