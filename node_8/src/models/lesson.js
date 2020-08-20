const { Schema, model } = require("mongoose");

const lessonSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  comments: {
    type: [
      {
        date: { type: Number, required: true },
        author: { type: String, required: true },
        message: { type: String, required: true },
      },
    ],
    default: [],
  },

  isDelete: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Lesson", lessonSchema);
