const express = require("express");

const router = express.Router();

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  res.json({
    message: "signed in",
    user: email,
    token: "asdf.fdsa.qwer",
  });
});

router.post("/signup", (req, res) => {
  let { email, password } = req.body;
  res.json({
    message: "signed up",
    user: email,
    token: "asdf.fdsa.qwer",
  });
});

module.exports = router;
