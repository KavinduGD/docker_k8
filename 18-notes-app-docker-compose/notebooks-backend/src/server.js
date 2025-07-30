const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const noteBooksRouter = require("./route.js");

const app = express();

app.use(bodyParser.json());

app.use("/api/notebooks", noteBooksRouter);

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
