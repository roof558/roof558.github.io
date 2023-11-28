import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes