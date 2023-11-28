import React from "react";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <motion.div inital={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: { duration: 0.1 }}}>
            <p>
                Project Page
            </p>
        </motion.div>
    );
};

export default Project;