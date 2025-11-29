"use client";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
  Chip,
  Tooltip,
  Box,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [touchZoom, setTouchZoom] = useState(false);


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4 },     // responsive horizontal padding
        py: { xs: 6, sm: 10 },    // responsive vertical padding
        bgcolor: isDark ? "background.default" : "transparent",
        background: isDark
          ? undefined
          : "linear-gradient(135deg, #e0f2f1, #ffffff)",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: 350 },  
          borderRadius: "20px",
          transition: "all 0.3s ease",
          boxShadow: isDark
            ? "0px 0px 25px rgba(0, 255, 255, 0.12)"
            : "0px 4px 20px rgba(0,0,0,0.15)",
          backgroundColor: isDark ? "#1d1f21" : "#ffffff",
          border: isDark ? "1px solid rgba(0,255,255,0.15)" : "none",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: isDark
              ? "0px 0px 35px rgba(0, 255, 255, 0.18)"
              : "0px 8px 25px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>
          <Stack direction="column" spacing={1} alignItems="center">
           
<Avatar
  onTouchStart={() => {
    setTouchZoom(true);
    setTimeout(() => setTouchZoom(false), 300); // remove zoom after animation
  }}
  onClick={() => {
    setTouchZoom(true);
    setTimeout(() => setTouchZoom(false), 300);
  }}
  sx={{
    width: { xs: 56, sm: 80 },
    height: { xs: 56, sm: 80 },
    transition: "transform 0.3s ease",
    transform: touchZoom ? "scale(1.08)" : "scale(1)",
     boxShadow: isDark
    ? "0px 0px 20px rgba(0, 255, 255, 0.12)"
    : "0 4px 20px rgba(0,0,0,0.08)",

  backgroundColor: isDark ? "#1d1f21" : "#ffffff",
  border: isDark ? "1px solid rgba(0,255,255,0.12)" : "none",
       "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: isDark
      ? "0px 0px 30px rgba(0, 255, 255, 0.25)"
      : "0px 8px 25px rgba(0,0,0,0.15)",
    border: isDark ? "1px solid rgba(0,255,255,0.3)" : "none",
  },
  }}
  src="/anime.jpeg"
  alt="Anusha"
/>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                background: isDark
                  ? "linear-gradient(90deg, #80eaff, #4dd0e1)"
                  : "linear-gradient(90deg, #00897b, #26c6da)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                mt: 1,
              }}
            >
              Anusha
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                maxWidth: 360,
              }}
            >
              React / Next.js Developer — Frontend + Basic API Integration
            </Typography>
          </Stack>

                      {/* Chips row — allow wrapping */}
                    <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mt: 1, flexWrap: "wrap", gap: 1 }} 
            >
            {["React", "Next.JS", "Material-UI", "JavaScript (ES6+)", "REST API"].map((label) => (
              <Chip
                key={label}
                label={label}
                size="small"
                sx={{
                  bgcolor: isDark ? "#263238" : undefined,
                  color: isDark ? "#4dd0e1" : undefined,
                  borderColor: isDark ? "#4dd0e1" : undefined,
                }}
              />
            ))}
          </Stack>

          {/* Social icons row */}
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Tooltip title="Github">
              <IconButton
                component="a"
                href="https://github.com/anushacodespace"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: isDark ? "#4dd0e1" : "#00695c",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.15)", color: isDark ? "#80eaff" : "#00897b" },
                }}
              >
                <GitHub />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/anusha170797/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: isDark ? "#4dd0e1" : "#00695c",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.15)", color: isDark ? "#80eaff" : "#00897b" },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", mt: 1 }}>
          <Button
            variant="contained"
            component={Link}
            href="/contact"
            sx={{
              mt: 2,
              bgcolor: isDark ? "#00bcd4" : "primary.main",
              "&:hover": { bgcolor: isDark ? "#0097a7" : "primary.dark" },
              width: { xs: "90%", sm: "auto" },   // full width on mobile
            }}
          >
            Contact Me
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
