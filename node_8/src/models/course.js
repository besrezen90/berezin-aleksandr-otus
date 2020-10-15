const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  members: {
    type: [String],
    default: [],
  },
  accessRequest: {
    type: [String],
    default: [],
  },
  url: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Course", courseSchema);
