const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hello mf1");
});
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to notebooks db");
    app.listen(port, () => {
      console.log(`Notebooks server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to the notebooksDB");
    console.log(err);
  });
