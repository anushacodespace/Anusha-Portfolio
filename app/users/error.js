"use client";

import { useEffect } from "react";
import { Box, Button, Container, Typography, Alert } from "@mui/material";

export default function UsersError({ error, reset }) {
  useEffect(() => {
    console.error("Users page error:", error);
  }, [error]);

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 2,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Something went wrong 😅
        </Typography>

        <Alert severity="error" sx={{ mb: 3 }}>
          We couldn&apos;t load the users list right now.
        </Alert>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Please check your connection or try again.
        </Typography>

        <Button
          variant="contained"
          onClick={reset}
          sx={{ textTransform: "none" }}
        >
          Try Again
        </Button>
      </Box>
    </Container>
  );
}
