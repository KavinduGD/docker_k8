const express = require("express");
const { Note } = require("./model");
const axios = require("axios");

const notebooksURL = process.env.NOTEBOOK_URL;

const router = express.Router();

// add a note
router.post("/", async (req, res) => {
  try {
    const { title, content, notebookID } = req.body;

    if (notebookID) {
      try {
        await axios.get(`${notebooksURL}${notebookID}`);
      } catch (err) {
        res.status(404).json({ error: "invalid book id" });
        console.log(err);
      }
    }

    if (!title || !content) {
      res.status(400).json({ error: "title field is required" });
    }

    const note = new Note({ title, content, notebookID });
    await note.save();

    res.status(201).json({ data: note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all note

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({ data: notes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get note by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ data: note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update a note

router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    const { id } = req.params;

    const note = await Note.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      {
        new: true,
      }
    );

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ data: note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete a note

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ data: note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
