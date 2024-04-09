import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// function updateDarkMode(darkMode) {
//   if (darkMode) {
//     document.documentElement.classList.add("light");
//   } else {
//     document.documentElement.classList.remove("light");
//   }
// }

export function updateDarkMode(darkMode) {
  if (darkMode) {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
