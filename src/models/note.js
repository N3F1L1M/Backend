const { Schema, model } = require("mongoose");

const chema = new Schema(
  {
    title: { type: String, required: True },
    content: { type: String, required: True },

    author: String,
  },

  {
    timestamps: true,
  }
);

module.exports = model("note", chema);
