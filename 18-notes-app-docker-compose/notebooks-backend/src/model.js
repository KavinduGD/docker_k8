const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteBookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Notebook = mongoose.model("Notebook", NoteBookSchema);

module.exports = {
  Notebook,
};
