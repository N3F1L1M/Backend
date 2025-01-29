const { Schema, model } = require("mongoose");

const chema = new Schema(
  {
    username: {type:String, trim:true , required:true, unique: true}

  },{

        timestamps: true

  });

module.exports = model("user", chema);
