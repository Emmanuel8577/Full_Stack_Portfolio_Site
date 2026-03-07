import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800"
    >
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        PORTFOLIO.
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        <a href="#home" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">
          Projects
        </a>
        <a href="#services" className="hover:text-blue-600 transition-colors">
          Services
        </a>
        <a href="#about" className="hover:text-blue-600 transition-colors">
          About
        </a>
      </div>

      {/* Action Area */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a
          href="https://wa.me/9137118577"
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex"
        >
          {/* The Animated "Splash" Indicator */}
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>

          <button className="relative px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Hire Me
          </button>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
