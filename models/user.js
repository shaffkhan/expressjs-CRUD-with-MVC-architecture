const mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      jobTitle: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  //creating the model:
  const User = mongoose.model("user", schema);
  module.exports = User;