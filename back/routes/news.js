const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      publishDate: "14/10/2026",
      title: "Add news route.",
      content: "Added a new route for getting news articles.",
      modDate: "14/10/20206",
    },
  ]);
});

module.exports = router;
