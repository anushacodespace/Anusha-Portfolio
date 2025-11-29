// app/users/page.jsx
import Link from "next/link";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { users } from "../data/users"; 
import UsersListClient from "./UsersListClient";

export default function UsersPage() {
  // We're using local data (no fetch)
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Our Users
      </Typography>

      <Box sx={{ borderRadius: 2, p: 2, bgcolor: "background.paper", boxShadow: 2 }}>
        <UsersListClient users={users} />
        <List>
          {users.map((u) => (
            <ListItem key={u.id} divider sx={{ cursor: "pointer" }}>
              <Link
                href={`/users/${u.id}`}
                style={{ textDecoration: "none", display: "block", width: "100%", color: "inherit" }}
              >
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
