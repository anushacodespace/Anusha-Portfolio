// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 👉 Random user data sample
const users = [
  {
    id: 1,
    name: "Anusha",
    role: "Full Stack Developer",
    experience: "2 Years",
    skills: ["React", "Next.js", "Express", "MongoDB", "Git"],
    about: "Passionate about building scalable web apps with React & Node.",
  },
  {
    id: 2,
    name: "Rocky",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "Photoshop", "Illustrator"],
    about: "Creates pixel-perfect designs & smooth user experiences.",
  },
  {
    id: 3,
    name: "Tej",
    role: "Frontend Engineer",
    experience: "1.5 Years",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    about: "Loves turning UI ideas into reliable responsive web apps.",
  },
];

// GET all users
app.get("/api/users", (req, res) => res.json(users));

// GET one user
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
