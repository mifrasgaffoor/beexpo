const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema.Types
const eventschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    finaldate: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    breifDescription: {
      type: String,
      required: true,
    },

    fullDescription: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },

    type: { type: String },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const eventModel = new mongoose.model("Event", eventschema);
module.exports = eventModel;
