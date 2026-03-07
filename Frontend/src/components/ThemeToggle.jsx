import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-yellow-500 dark:text-blue-400 shadow-lg"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;