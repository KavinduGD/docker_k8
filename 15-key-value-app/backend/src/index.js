const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const healthRouter = require("./routes/health");

const app = express();

const port = process.env.LOCALHOST_PORT;

app.use(bodyParser.json());

app.use("/health", healthRouter);

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_HOST}/${process.env.KEY_VALUE_DB}`,
    {
      auth: {
        username: process.env.KEY_VALUE_USER,
        password: process.env.KEY_VALE_PASSWORD,
      },
      connectTimeoutMS: 500,
    }
  )
  .then(() => {
    console.log("Connect to DB");
    app.listen(port, () => {
      console.log(`App running on port ${process.env.LOCALHOST_PORT}`);
    });
  })
  .catch((err) => console.log(err));
