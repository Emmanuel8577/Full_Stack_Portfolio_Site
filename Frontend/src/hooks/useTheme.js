import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'; // Grab the raw context

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};