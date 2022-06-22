const mongoose = require("mongoose");

const studentschema = new mongoose.Schema(
  {
    mobileno: {
      type: String,
      required: true,
    },

    website: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "no photo",
    },

    linkedin: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = new mongoose.model("Student", studentschema);
module.exports = studentModel;
