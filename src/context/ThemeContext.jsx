import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('creative'); // 'creative' or 'professional'

  useEffect(() => {
    // We can apply a global class to body based on theme
    if (theme === 'professional') {
      document.body.classList.add('pro-mode');
      document.body.classList.remove('paper-texture');
    } else {
      document.body.classList.remove('pro-mode');
      document.body.classList.add('paper-texture');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'creative' ? 'professional' : 'creative');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
