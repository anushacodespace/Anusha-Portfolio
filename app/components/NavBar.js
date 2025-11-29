"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode, LightMode } from "@mui/icons-material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";
import { ColorModeContext } from "../theme/ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Users", href: "/users" },
];

export default function NavBar() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Anusha-Portfolio
          </Typography>

          {/* Desktop nav: show on md+ */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 1 }}>
            {navLinks.map((l) => (
              <Button
                key={l.href}
                color="inherit"
                component={Link}
                href={l.href}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, mr: 1 }}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Dark/Light toggle always visible */}
          <IconButton color="inherit" onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navLinks.map((l) => (
              <ListItem key={l.href} disablePadding>
                <ListItemButton component={Link} href={l.href}>
                  <ListItemText primary={l.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
