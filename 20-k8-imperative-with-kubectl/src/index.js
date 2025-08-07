const express = require("express");

const app = express();

const port = 80;

app.get("/", (req, res) => {
  res.send("<h1>Hello mf</h1>");
});

app
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error(`Error starting server: ${err.message}`);
  });
