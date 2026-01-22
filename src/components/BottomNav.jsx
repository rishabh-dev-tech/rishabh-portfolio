import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItem =
  "flex flex-col items-center text-xs gap-1 px-3 py-1 hover:text-cyan-400 transition";

export default function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
        bg-black/80 backdrop-blur-xl border border-white/10 
        px-6 py-3 rounded-2xl flex gap-6 z-50 shadow-2xl">

      <NavLink to="/" className={({ isActive }) =>
        `${navItem} ${isActive ? "text-cyan-400" : "text-gray-400"}`
      }>
        <FaHome className="text-lg" />
        <span>Home</span>
      </NavLink>

      <NavLink to="/about" className={({ isActive }) =>
        `${navItem} ${isActive ? "text-cyan-400" : "text-gray-400"}`
      }>
        <FaUser className="text-lg" />
        <span>About</span>
      </NavLink>

      <NavLink to="/skills" className={({ isActive }) =>
        `${navItem} ${isActive ? "text-cyan-400" : "text-gray-400"}`
      }>
        <FaTools className="text-lg" />
        <span>Skills</span>
      </NavLink>

      <NavLink to="/projects" className={({ isActive }) =>
        `${navItem} ${isActive ? "text-cyan-400" : "text-gray-400"}`
      }>
        <FaProjectDiagram className="text-lg" />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) =>
        `${navItem} ${isActive ? "text-cyan-400" : "text-gray-400"}`
      }>
        <FaEnvelope className="text-lg" />
        <span>Contact</span>
      </NavLink>

    </div>
  );
}