const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ message: "Online!" }));

app.listen(3333, () => {
  console.log("Backend Started!👌");
});
