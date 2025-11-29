"use client";

import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: teal,
  },
});

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline gives a clean default styling */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
