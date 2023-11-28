import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { FolderOpenDot, UserCircle, Phone, LayoutDashboard } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Navbar } from "../components/Navbar";

const Home = () => {
    return (
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
            <div>
                <h1>
                Hi,
                <br /> This is Justin Lee's Project Portfolio Page
                <br /> Software Engineer
                </h1>
            </div>
        </div>
    );
};

export default Home;