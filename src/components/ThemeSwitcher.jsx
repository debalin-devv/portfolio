import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-surface-container-highest border-2 border-on-surface rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-colors hover:bg-primary-container"
    >
      <span className="material-symbols-outlined">
        {theme === 'creative' ? 'brush' : 'work'}
      </span>
      <span className="font-label-caps text-label-caps uppercase hidden md:inline">
        {theme === 'creative' ? 'Creative Mode' : 'Pro Mode'}
      </span>
    </motion.button>
  );
};

export default ThemeSwitcher;
