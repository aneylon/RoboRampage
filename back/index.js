const express = require("express");
var cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());

const news = require("./routes/news");

app.get("/", (req, res) => {
  res.send("Hello Robo!");
});

app.use("/news", news);

app.listen(port, () => {
  console.log(`Robo backend listening on port ${port}`);
});
