const express = require("express");

const router = express.Router();

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send("get game data for userId : " + userId);
});

router.get("/saveGame/:gameId", (req, res) => {
  const { userId } = req.params;
  res.send("get game data for gameId : " + gameId);
});

module.exports = router;
