const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`app start on port ${port}`);
});
