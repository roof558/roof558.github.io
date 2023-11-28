import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { FolderOpenDot, UserCircle, Phone, LayoutDashboard } from "lucide-react";

const Contact = () => {
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
                    Contact Page
                </h1>
                <p>
                    Email: roof558@gmail.com
                </p>
                <p>
                    Mobile: 425-273-8798
                </p>
                <p>
                    LinkedIn: https://www.linkedin.com/in/dongjoon-lee-a11bb6161/
                </p>
            </div>            
        </div>
    );
};

export default Contact;