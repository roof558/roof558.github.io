import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}


export default App;
