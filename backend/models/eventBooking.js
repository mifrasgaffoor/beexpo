const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const eventbookingschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    eventid: {
      type: String,
      required: true,
    },

    userid: {
      type: String,
      required: true,
    },
    category: {
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

    photo: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },

  {
    timestamps: true,
  }
);

const eventbookingModel = new mongoose.model(
  "EventBooking",
  eventbookingschema
);
module.exports = eventbookingModel;
