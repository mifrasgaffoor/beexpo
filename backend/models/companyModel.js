const mongoose = require("mongoose");

const companyschema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
    },
    mobileno: {
      type: String,
      required: true,
    },
    companyusername: {
      type: String,
      required: true,
    },
    companymail: {
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

    appliedcandiates: {
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

const companyModel = new mongoose.model("Company", companyschema);
module.exports = companyModel;
