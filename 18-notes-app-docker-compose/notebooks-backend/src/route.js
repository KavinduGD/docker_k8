const express = require("express");
const { Notebook } = require("./model");

const router = express.Router();

// add a notebook
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      res.status(400).json({ error: "name field is required" });
    }

    const notebook = new Notebook({ name, description });
    await notebook.save();
    res.status(201).json({ data: notebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all notebooks

router.get("/", async (req, res) => {
  try {
    const notebooks = await Notebook.find();

    res.status(200).json({ data: notebooks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get notebook by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const notebook = await Notebook.findById(id);

    if (!notebook) {
      res.status(404).json({ error: "Notebook not found" });
    }

    res.status(200).json({ data: notebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update a notebook

router.put("/:id", async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    const notebook = await Notebook.findByIdAndUpdate(
      id,
      {
        name,
        description,
      },
      {
        new: true,
      }
    );

    if (!notebook) {
      return res.status(404).json({ error: "Notebook not found" });
    }

    res.status(200).json({ data: notebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete a notebook

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const notebook = await Notebook.findByIdAndDelete(id);

    if (!notebook) {
      return res.status(404).json({ error: "Notebook not found" });
    }
    res.status(200).json({ data: notebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
