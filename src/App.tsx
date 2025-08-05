import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe";
import Music from "./pages/Music";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/music" element={<Music />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;