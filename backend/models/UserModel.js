const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
  
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("User", userschema);
module.exports = userModel;
