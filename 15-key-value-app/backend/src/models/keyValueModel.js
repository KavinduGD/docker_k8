const mongoose = require("mongoose");

const keyValueSchema = new mongoose.Schema({
  key: {
    type: String,
    require: true,
    unique: true,
  },
  value: {
    type: String,
    require: true,
  },
});

const KeyValueModel = mongoose.model("KeyValue", keyValueSchema);

module.exports = {
  KeyValueModel,
};
