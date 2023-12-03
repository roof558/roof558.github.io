import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const PageTransition = ({ children, isActive }) => {
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
        if (isActive) {
          setAnimating(true);
    
          const timeout = setTimeout(() => {
            setAnimating(false);
          }, 500);
    
          return () => clearTimeout(timeout);
        }
    }, [isActive]);

    return (
        <motion.div
            className={`page ${isAnimating ? 'animating' : ''}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;