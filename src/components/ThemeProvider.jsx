import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? "dark" : "light";
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={theme}>{children}</div>
     
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;