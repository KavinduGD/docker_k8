const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const users = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//get all the users
app.get("/users", (req, res) => {
  res.status(200).send({ users });
});

//register user
app.post("/users", (req, res) => {
  const userID = req.body.userID;
  if (!userID) {
    return res.status(400).send("Missing userID");
  }

  if (users.includes(userID)) {
    return res.status(400).send("userID already exit");
  }

  users.push(userID);

  res.status(201).send("user created");
});

app.listen(port, () => {
  console.log("app start on port 3000");
});
