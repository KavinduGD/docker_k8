const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("up man lol 123");
});

module.exports = router;
