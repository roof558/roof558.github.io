import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div 
            id="about"
            className="bg-purple-200 h-screen"
            initial={{width: 0}} 
            animate={{width: "100%"}} 
            exit={{x: -window.innerWidth, transition: { duration: 0.5 }}}
        >
            <p>
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                About Me Page
                
            </p>
        </motion.div>
    );
};

export default AboutMe;