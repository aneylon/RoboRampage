const express = require("express");

const router = express.Router();
router.get("/sound/:userId", (req, res) => {
  const { userId } = req.params;
  res.json({
    sfxVolume: 5,
    musicVolume: 5,
  });
});

router.post("/sound/:userId", (req, res) => {
  const { userId } = req.params;
  res.json({
    message: "Sound Save Successful",
  });
});

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
