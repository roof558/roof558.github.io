import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { FolderOpenDot, UserCircle, Phone, LayoutDashboard } from "lucide-react";

const Project = () => {
    return (
        <div className="flex">
            <Sidebar className= 'flex'>
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
                <p>
                    Project Page
                </p>
            </div>
        </div>
    );
};

export default Project;