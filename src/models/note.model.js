const { Schema, model } = require("mongoose");

const chema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },

    author: String,
    date: { type: Date, default: Date.now }
  },

  {
    timestamps: true,
  }
);

module.exports = model("note", chema);
