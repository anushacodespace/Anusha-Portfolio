"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { users } from "../../data/users";

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

 useEffect(() => {
    if (!id) return;
    // find locally from mock data
    const found = users.find((u) => String(u.id) === String(id));
    setUser(found ?? null);
  }, [id]);

  if (!user) return <Typography sx={{ p: 4 }}>Loading...</Typography>;

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Box sx={{ borderRadius: 2, p: 3, bgcolor: "background.paper", boxShadow: 2 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>{user.name}</Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
          {user.role} — {user.experience}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Skills
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
          {user.skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>About</Typography>
        <Typography variant="body2">{user.about}</Typography>
      </Box>
    </Container>
  );
}
