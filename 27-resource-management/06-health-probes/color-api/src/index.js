const express = require("express");
const os = require("os");

const app = express();

const port = 80;
const color = "blue";
const hostname = os.hostname();

const delay_startup = process.env.DELAY_STARTUP === "true";
const fail_liveness = process.env.FAIL_LIVENESS === "true";
const fail_readiness =
  process.env.FAIL_READINESS === "true" ? Math.random() < 0.5 : false;

console.log(`Delay startup : ${delay_startup}`);
console.log(`Fail liveness : ${fail_liveness}`);
console.log(`Fail Readiness : ${fail_readiness}`);

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

//startup probe
app.get("/up", (req, res) => {
  return res.json("ok");
});

//liveness probe
app.get("/health", (req, res) => {
  if (fail_liveness) {
    res.sendStatus(503);
  } else res.json("ok");
});

//readiness probe
app.get("/ready", (req, res) => {
  if (fail_readiness) {
    res.sendStatus(503);
  } else res.json("ok");
});

// startup delaying
//purposefully blocking the app start process for 60s
if (delay_startup) {
  const start = Date.now();
  while (Date.now() - start < 60000) {}
}

app
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error(`Error starting server: ${err.message}`);
  });
