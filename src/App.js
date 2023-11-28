import React from "react";
import { ToastContainer } from 'react-toastify';
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { FolderOpenDot, UserCircle, Phone, LayoutDashboard } from "lucide-react";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <main className="App">
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
          <AnimatedRoutes />
        </div>
      </main>
      <ToastContainer />
    </>
  );
}


export default App;
