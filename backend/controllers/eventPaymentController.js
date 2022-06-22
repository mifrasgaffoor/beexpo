const express = require("express");
const router = express.Router();
const EventPay = require("../models/eventPayment");

const eventPaymentSaveCntrl = {
  savepay: async (req, res) => {
    try {
      const newevenpaymentsave = new EventPay({
        payid: req.body.payidnew,
        bookid: req.body.bookidid,
      });

      const evenpaymentsave = await newevenpaymentsave.save({
        payid: req.body.payidnew,
        bookid: req.body.bookidid,
      });

      res.send(evenpaymentsave);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = eventPaymentSaveCntrl;
