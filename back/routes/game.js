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

router.post("/saveGame/:gameId", (req, res) => {
  const { gameId, gameInfo } = req.params;
  res.send("post game data for gameId : " + gameId + gameInfo);
});

router.patch("/saveGame/:gameId", (req, res) => {
  const { gameId, gameInfo } = req.params;
  res.send("patch game data for gameId : " + gameId + gameInfo);
});

module.exports = router;
