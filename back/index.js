const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const auth = require("./routes/auth");

const news = require("./routes/news");

app.get("/", (req, res) => {
  res.send("Hello Robo!");
});

app.use("/auth", auth);
app.use("/news", news);

app.listen(port, () => {
  console.log(`Robo backend listening on port ${port}`);
});
