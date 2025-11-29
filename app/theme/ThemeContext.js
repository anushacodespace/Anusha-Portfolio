"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  // load from localStorage once
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("themeMode");
    if (saved === "light" || saved === "dark") {
      setMode(saved);
    }
  }, []);

  const toggleColorMode = () => {
    setMode(prev => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", next);
      }
      return next;
    });
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: "#00897b" },
    },
  });

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
