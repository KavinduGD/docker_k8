const express = require("express");
const { KeyValueModel } = require("../models/keyValueModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const { key, value } = req.body;

  if (!key || !value) {
    return res.status(400).json({
      error: "Both key and value are required",
    });
  }

  try {
    const existingKey = await KeyValueModel.findOne({ key });

    if (existingKey) {
      res.status(400).json({
        error: "Key already exists",
      });
    }

    const keyValue = new KeyValueModel({ key, value });
    await keyValue.save();

    return res.status(201).json({
      message: "kay value pair created successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "error occurred " });
  }
  console.log(typeof KeyValueModel);
  res.send("hit");
});

router.get("/:key", async (req, res) => {
  const { key } = req.params;

  if (!key) {
    return res.status(400).json({ error: "Key required" });
  }

  try {
    const keyValue = await KeyValueModel.findOne({ key });

    if (!keyValue) {
      return res.status(404).json({ error: "Invalid Key" });
    }

    res.status(200).json({
      key: keyValue.key,
      value: keyValue.value,
    });
  } catch (err) {
    res.status(500).json({ error: "error occurred " });
  }
});

router.put("/:key", async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  if (!key || !value) {
    return res.status(400).json({
      error: "Key and value required",
    });
  }

  try {
    const newKeyValue = await KeyValueModel.findOneAndUpdate(
      { key },
      { value },
      { new: true }
    );

    if (!newKeyValue) {
      return res.status(404).send({
        error: "Invalid key",
      });
    }

    return res.status(201).json({
      key: newKeyValue.key,
      newValue: newKeyValue.value,
    });
  } catch (err) {
    res.status(500).json({ error: "error occurred " });
  }
});

router.delete("/:key", async (req, res) => {
  const { key } = req.params;
  try {
    const keyValue = await KeyValueModel.findOneAndDelete({ key });

    if (!keyValue) {
      return res.status(404).json({ error: "invalid key" });
    }

    return res.status(200).json({ message: "Key value Deleted" });
  } catch (err) {
    res.status(500).json({ error: "error occurred " });
  }
});

module.exports = router;
