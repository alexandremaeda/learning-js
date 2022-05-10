const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  { id: uuid(), title: "Backend com NodeJs", owner: "Alexandre Maeda" },
  { id: uuid(), title: "Frontend com React", owner: "Alexandre Maeda" },
  { id: uuid(), title: "Mobile com React Native", owner: "Alexandre Maeda" },
];

app.get("/projects", (req, res) => res.json(projects));
app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = {
    id: uuid(),
    title,
    owner,
  };

  projects.push(project);

  return res.json(project);
});

app.listen(3333, () => {
  console.log("Backend Started!👌");
});
