const express = require("express");
var cors = require("cors");

const app = express();
const port = 12080;

app.use(cors());

const news = require("./routes/news");

app.get("/", (req, res) => {
  res.send("Hello Robo!");
});

app.use("/news", news);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
