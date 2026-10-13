console.log("back it up");

const express = require("express");

const app = express();

const port = 12080;

app.get("/", (req, res) => {
  res.send("Hello Robo!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
