"use client";

import { Container, Box, Typography, Stack, Chip, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [touchZoom, setTouchZoom] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        background: isDark
          ? theme.palette.background.default
          : "linear-gradient(135deg, #e0f2f1, #ffffff)",
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 1,
            background: isDark
              ? "linear-gradient(90deg, #80eaff, #4dd0e1)"
              : "linear-gradient(90deg, #00897b, #26c6da)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          React / Next.js Developer — Frontend + Basic API Integration
        </Typography>

        {/* Main content */}
        <Stack spacing={4}>
          {/* Intro section */}
         <Box
 sx={{
  p: 3,
  borderRadius: 3,
  transition: "all 0.3s ease",

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

>
  <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
    
    {/* Profile Photo */}
 <Box
  component="img"
  src="/anime.jpeg"
  alt="Profile Photo"
  onTouchStart={() => {
    setTouchZoom(true);
    setTimeout(() => setTouchZoom(false), 300);
  }}
  onClick={() => {
    setTouchZoom(true);
    setTimeout(() => setTouchZoom(false), 300);
  }}
  sx={{
     width: 120, 
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    transition: "all 0.3s ease",
    transform: touchZoom ? "scale(1.08)" : "scale(1)",
    cursor: "pointer",
   
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
/>

    {/* Intro Text */}
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Hi, I&apos;m Anusha 👋
      </Typography>
      <Typography variant="body1" color="text.secondary">
        I&apos;m a developer focused on building clean, user-friendly web apps
        using React and Next.js. I enjoy turning ideas into real products,
        designing simple UI, and continuously improving my skills in both
        frontend and backend.
         <br />
              After a career break for family and personal growth, I&apos;m now
              actively preparing to re-enter the industry with solid modern skills
              like Next.js, Material UI, and full-stack concepts.
              Currently Learning: Express.js, Backend fundamentals
      </Typography>
    </Box>
  </Stack>
</Box>


          <Divider flexItem>Skills</Divider>

          {/* Skills section */}
          <Box>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Core Technologies
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2 }}
            >
              <Chip label="React" />
              <Chip label="Next.js" />
              <Chip label="JavaScript (ES6+)" />
              <Chip label="Material UI" />
              <Chip label="HTML" />
              <Chip label="CSS" />
            </Stack>

            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Currently Learning
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Full-Stack (Next.js API Routes)" color="primary" />
              <Chip label="State Management Patterns" />
              <Chip label="Clean Code & Best Practices" />
            </Stack>
          </Box>

          <Divider flexItem>Journey</Divider>

          {/* Journey / timeline style */}
          <Box>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              My Journey
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  🧩 Before
                </Typography>
                <Typography variant="body2">
                  Worked as a Frontend Developer (React) and gained real-world
                  experience building UI and working with teams.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  💛 Career Break
                </Typography>
                <Typography variant="body2">
                  Took a break to focus on my baby, family responsibilities, and
                  exploring ideas like trading and small business concepts.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  🚀 Now
                </Typography>
                <Typography variant="body2">
                  Sharpening my React and Next.js skills, building projects,
                  and preparing for remote-friendly developer roles.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
