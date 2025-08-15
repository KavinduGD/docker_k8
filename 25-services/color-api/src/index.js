const express = require("express");
const os = require("os");

const app = express();

const port = 80;
const color = "blue";
const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send(`<h1 style="color:${color}"}>Hello from color api</h1>
    <h2>Hostname : ${hostname}</h2>`);
});

app.get("/api", (req, res) => {
  const { format } = req.query;
  if (format === "json") {
    return res.json({
      color,
      hostname,
    });
  } else {
    return res.send(`color ; ${color}, hostname : ${hostname}`);
  }
});
app
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error(`Error starting server: ${err.message}`);
  });
