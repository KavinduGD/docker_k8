const express = require("express");
const os = require("os");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { getColor } = require("./db/color");

const { apiRouter } = require("./routes/api");

const app = express();
app.use(bodyParser.json());

const port = 80;
const hostname = os.hostname();

app.get("/", async (req, res) => {
  const { colorKey } = req.query;
  const color = await getColor({ key: colorKey });

  res.send(`<h1 style="color:${color}"}>Hello from color api</h1>
    <h2>Hostname : ${hostname}</h2>`);
});

app.use("/api", apiRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app
      .listen(port, () => {
        console.log(`listening on port ${port}`);
      })
      .on("error", (err) => {
        console.error(`Error starting server: ${err.message}`);
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
