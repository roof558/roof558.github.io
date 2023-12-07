import React from "react";
import { ToastContainer } from 'react-toastify';
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { LayoutDashboard, UserCircle, FolderOpenDot, Phone } from "lucide-react";
import { ScrollContainer, scrollTo } from "react-scroll-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  const scrollToSelector = (selector) => {
    // Using the scrollTo function from react-scroll-motion
    scrollTo(selector);
  };

  return (
    <>
      <div className="App">
        <div className="flex">
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Home"
              onClick={() => scrollToSelector("#home")}
              alent
            />
            <SidebarItem
              icon={<UserCircle size={20} />}
              text="About"
              onClick={() => scrollToSelector("#about")}
              active
            />
            <SidebarItem
              icon={<FolderOpenDot size={20} />}
              text="Project"
              onClick={() => scrollToSelector("#project")}
              active
            />
            <SidebarItem
              icon={<Phone size={20} />}
              text="Contact"
              onClick={() => scrollToSelector("#contact")}
              active
            />
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
