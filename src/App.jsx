import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Homes";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Skills from "./pages/Skills";

import BottomNav from "./components/BottomNav";
import ThemeToggle from "./components/ThemeToggle";
import Homes from "./pages/Homes";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <BottomNav />
    </div>
  );
}