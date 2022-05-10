const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/projects", (req, res) =>
  res.json([
    { title: "Backend com NodeJs", owner: "Alexandre Maeda" },
    { title: "Frontend com React", owner: "Alexandre Maeda" },
    { title: "Mobile com React Native", owner: "Alexandre Maeda" },
  ])
);

app.listen(3333, () => {
  console.log("Backend Started!👌");
});
