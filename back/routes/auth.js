const express = require("express");

const router = express.Router();

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  if (email.includes("bad")) {
    res.json({
      message: "email not found",
    });
  } else if (password.includes("bad")) {
    res.json({
      message: "password incorrect",
    });
  } else {
    res.json({
      message: "success : signed in",
      user: email,
      token: "asdf.fdsa.qwer",
    });
  }
});

router.post("/signup", (req, res) => {
  let { email, password } = req.body;
  if (email.includes("bad")) {
    res.json({
      message: "email not found",
    });
  } else if (password.includes("bad")) {
    res.json({
      message: "password incorrect",
    });
  } else {
    res.json({
      message: "success : signed up",
      user: email,
      token: "asdf.fdsa.qwer",
    });
  }
});

module.exports = router;
