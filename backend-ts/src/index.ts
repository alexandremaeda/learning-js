import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ message: "TS like nice" }));

app.listen(3333);
