const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const eventpaymentschema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: true,
    },

    bookingid: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const eventpaymentModel = new mongoose.model(
  "EventPayment",
  eventpaymentschema
);
module.exports = eventpaymentModel;
