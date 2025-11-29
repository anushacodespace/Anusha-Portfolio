// app/users/UsersListClient.jsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function UsersListClient({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return users;

    return users.filter((u) => {
      const name = u.name?.toLowerCase() || "";
      const role = u.role?.toLowerCase() || "";
      const skills = Array.isArray(u.skills)
        ? u.skills.join(" ").toLowerCase()
        : (u.skills || "").toLowerCase();

      return (
        name.includes(term) ||
        role.includes(term) ||
        skills.includes(term)
      );
    });
  }, [search, users]);

  return (
    <>
      {/* 🔍 Search box */}
      <TextField
        fullWidth
        size="small"
        label="Search by name, role, or skill"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* 🧾 Filtered user list */}
      <List>
        {filteredUsers.map((u) => (
          <ListItem
            key={u.id}
            divider
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "action.hover",
                borderRadius: 1,
              },
            }}
          >
            <Link
              href={`/users/${u.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemText
                primary={u.name}
                secondary={`${u.role} — ${
                  Array.isArray(u.skills)
                    ? u.skills.join(", ")
                    : u.skills || ""
                }`}
              />
            </Link>
          </ListItem>
        ))}

        {filteredUsers.length === 0 && (
          <ListItem>
            <ListItemText primary="No users match your search." />
          </ListItem>
        )}
      </List>
    </>
  );
}
