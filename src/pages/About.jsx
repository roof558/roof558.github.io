import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div inital={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: { duration: 0.1 }}}>
            <p>
                About Me Page
            </p>
        </motion.div>
    );
};

export default AboutMe;