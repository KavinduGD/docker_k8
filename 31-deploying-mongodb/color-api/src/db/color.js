const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
});

const Color = mongoose.model("Color", colorSchema);

const saveColor = async (key, value) => {
  try {
    let color = await Color.findOne({ key });

    if (color) {
      color.value = value;
    } else {
      color = new Color({ key, value });
    }
    await color.save();
  } catch (error) {
    console.error("Error saving color:", error);
  }
};

const getColors = () => {
  return Color.find({});
};

const getColor = async ({ key }) => {
  let color = await Color.findOne({ key });
  if (!color) {
    color = process.env.DEFAULT_COLOR;
  } else {
    color = color.value;
  }

  return color || "blue";
};

const deleteColor = async (key) => {
  try {
    await Color.deleteOne({ key });
  } catch (error) {
    console.error("Error deleting color:", error);
  }
};

module.exports = { saveColor, getColor, getColors, deleteColor };
