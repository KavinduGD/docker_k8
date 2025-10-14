const express = require("express");
const { getColor, getColors, saveColor, deleteColor } = require("../db/color");
const os = require("os");

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  const { format, colorKey } = req.query;

  const color = await getColor({ key: colorKey });
  const hostname = os.hostname();

  if (format === "json") {
    return res.json({
      color,
      hostname,
    });
  } else {
    return res.send(`color ; ${color}, hostname : ${hostname}`);
  }
});

apiRouter.get("/colors", async (req, res) => {
  const colors = await getColors();
  res.json({ data: colors });
});

apiRouter.get("/color/:key", async (req, res) => {
  const { key } = req.params;
  const color = await getColor({ key });
  res.json({ data: color });
});

apiRouter.post("/color/:key", async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;
  await saveColor(key, value);
  res.status(201).send({ message: "Color saved" });
});

apiRouter.delete("/color/:key", async (req, res) => {
  const { key } = req.params;
  await deleteColor(key);
  res.status(204).send();
});

module.exports = { apiRouter };
