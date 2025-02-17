import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: localStorage.getItem("primaryColor") || "#f4c550",  
    accent: localStorage.getItem("accentColor") || "#fbe9ba",    
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--accent-color", theme.accent);
    localStorage.setItem("primaryColor", theme.primary);
    localStorage.setItem("accentColor", theme.accent);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
