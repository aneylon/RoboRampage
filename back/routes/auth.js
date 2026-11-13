const express = require("express");

const router = express.Router();

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  res.json({ message: "signed in : " + email });
});

router.post("/signup", (req, res) => {
  let { email, password } = req.body;
  res.json({ message: "signed up : " + email });
});

module.exports = router;
