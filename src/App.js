import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import { ToastContainer } from 'react-toastify';
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { FolderOpenDot, UserCircle, Phone, LayoutDashboard } from "lucide-react";

function App() {
  return (
    <>
      <main className="App">
        <Sidebar>
          <SidebarItem 
            icon={<LayoutDashboard size={20}/>}
            text="Home"
            alent
          />
          <SidebarItem icon={<UserCircle   size={20}/>} text="About" active />
          <SidebarItem icon={<FolderOpenDot  size={20}/>} text="Project" active />
          <SidebarItem icon={<Phone size={20}/>} text="Contact" active />
        </Sidebar>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </main>
      {/* <ToastContainer /> */}
    </>
  );
}


export default App;
