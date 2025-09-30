const express = require("express");
const os = require("os");
const fs = require("fs");
const path = require("path");

const getColor = () => {
  let color = process.env.DEFAULT_COLOR;
  const filePath = process.env.COLOR_CONFIG_PATH;

  if (filePath) {
    try {
      const colorFromFile = fs.readFileSync(path.resolve(filePath), "utf8");
      color = colorFromFile.trim();
    } catch (error) {
      console.log(`Failed to read contetn from ${filePath}`);
      console.log(error);
    }
  }
  color = color || "blue";
  return color;
};

const app = express();

const port = 80;
const color = getColor();
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
