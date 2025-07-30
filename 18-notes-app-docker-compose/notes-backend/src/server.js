const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const noteRouter = require("./route");

const app = express();

app.use(bodyParser.json());

app.use("/api/notes", noteRouter);

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
