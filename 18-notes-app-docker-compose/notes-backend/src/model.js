const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    notebookID: {
      type: Schema.Types.ObjectId,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = {
  Note,
};
