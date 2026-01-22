import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-cyan-500 text-black shadow-lg"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}