import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div 
            id="home"
            className="bg-purple-200 h-screen"
            initial={{width: 0}} 
            animate={{width: "100%"}} 
            exit={{x: -window.innerWidth, transition: { duration: 0.5 }}}
        >
            <h1>
            Hi,
            <br /> This is Justin Lee's Project Portfolio Page
            <br /> Software Engineer
            </h1>
        </motion.div>
    );
};

export default Home;