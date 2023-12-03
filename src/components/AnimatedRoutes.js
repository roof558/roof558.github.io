import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    const pages = [
        { path: '/', component: <Home /> },
        { path: '/project', component: <Project /> },
        { path: '/about', component: <About /> },
        { path: '/contact', component: <Contact /> },
    ];

    const currentPageIndex = pages.findIndex(page => page.path === location.pathname) || 0;

    return (
        <AnimatePresence exitBeforeEnter={false}>
            <motion.div key={location.pathname} style={{ width: '100%', display: 'flex' }}>
                <Routes location={location} key={location.pathname}>
                    {pages.map((page, index) => (
                        <Route
                            key={page.path}
                            path={page.path}
                            element={
                                index === currentPageIndex ? (
                                    <motion.div
                                        key={page.path}
                                        style={{ flex: 1, overflow: 'hidden' }}
                                        initial={{ x: index > currentPageIndex ? '100%' : '-100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: index > currentPageIndex ? '-100%' : '100%', transition: { duration: 2 } }}
                                    >
                                        {page.component}
                                    </motion.div>
                                ) : null
                            }
                        />
                    ))}
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
