"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      return setResponse({ type: "error", msg: "All fields are required." });
    }

    try {
      setLoading(true);
      setResponse(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(data);

      if (data.type === "success") {
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setResponse({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          size="large"
          disabled={loading}
          sx={{ textTransform: "none" }}
          endIcon={loading ? <CircularProgress size={18} /> : null}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {response && (
          <Alert severity={response.type} sx={{ mt: 1 }}>
            {response.msg}
          </Alert>
        )}
      </Box>
    </Container>
  );
}
