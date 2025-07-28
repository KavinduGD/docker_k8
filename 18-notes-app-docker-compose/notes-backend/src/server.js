const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hello mf1 from notes");
});

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to notes db");
    app.listen(port, () => {
      console.log(`Notes server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to the notes-db");
    console.log(err);
  });
