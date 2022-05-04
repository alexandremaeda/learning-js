const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("online"));

app.listen(3333);
