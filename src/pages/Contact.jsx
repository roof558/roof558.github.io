import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div inital={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: { duration: 0.1 }}}>
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
        </motion.div>            
    );
};

export default Contact;