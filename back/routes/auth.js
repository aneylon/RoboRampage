const express = require("express");

const router = express.Router();

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  console.log({ email, password });
  res.send(email + " signed in");
});

router.post("/signup", (req, res) => {
  let { email, password } = req.body;
  console.log({ email, password });
  res.send(email + " signed up");
});

module.exports = router;
