import React from "react";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <motion.div 
            className="bg-purple-200 h-screen"
            initial={{width: 0}} 
            animate={{width: "100%"}} 
            exit={{x: -window.innerWidth, transition: { duration: 0.5 }}}
        >
            <p>
                Project Page
            </p>
        </motion.div>
    );
};

export default Project;