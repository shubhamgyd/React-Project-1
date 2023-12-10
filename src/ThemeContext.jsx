import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
const CustomThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useContextTheme = () => {
  return useContext(CustomThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [customeTheme, setCustomeTheme] = useState({
    light: { background: "#ffffff", text: "#000000" },
    dark: { background: "#333333", text: "#ffffff" },
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const updateCustomTheme = (newTheme) => {
    setCustomeTheme((prevCustomeTheme) => ({
      ...prevCustomeTheme,
      [theme]: newTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CustomThemeContext.Provider value={{ customeTheme, updateCustomTheme}}>
      {children}
      </CustomThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
