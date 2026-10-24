const express = require("express");
const router = express.Router();

const newsItems = [
  {
    id: 1,
    publishDate: "14/10/2026",
    title: "Add news route.",
    content: "Added a new route for getting news articles.",
    modDate: "14/10/2026",
    author: "admin",
  },
  {
    id: 2,
    publishDate: "21/10/2026",
    title: "Add news results.",
    content: "Added more results when getting news items.",
    modDate: "22/10/2026",
    author: "admin",
  },
];

router.get("/", (req, res) => {
  res.send(newsItems);
});

module.exports = router;
