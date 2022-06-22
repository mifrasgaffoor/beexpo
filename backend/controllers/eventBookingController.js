const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");
const EventBooking = require("../models/eventBooking");

const eventBookingCntrl = {
  eventbooking: async (req, res) => {
    const {
      userid,
      category,
      title,
      eventid,
      duedate,
      finaldate,
      breifDescription,
      price,
      photo,
    } = req.body;

    try {
      const neweventbooking = new EventBooking({
        category,
        title,
        eventid,
        userid,
        duedate,
        finaldate,
        breifDescription,
        price,
        photo,
      });

      const booking = await neweventbooking.save({
        category,
        title,
        eventid,
        userid,
        duedate,
        finaldate,
        price,
        photo,
        breifDescription,
      });

      return res.status(200).send(booking);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  eventbookingBtId: async (req, res) => {
    const userid = req.body.userid;
    try {
      const bookings = await EventBooking.find({ userid: userid });
      console.log(bookings);
      res.send(bookings);
    } catch (error) {
      res.status(400).json({ error: "error" });
    }
  },

  eventbookingall: async (req, res) => {
    try {
      const allbooks = await EventBooking.find();
      res.send(allbooks);
      console.log(allbooks);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  eventbookingCancel: async (req, res) => {
    const cancelid = req.body.cancelid;
    try {
      const bookeditem = await EventBooking.findOne({ _id: cancelid });
      bookeditem.status = "cancelled";
      await bookeditem.save();
      res.send({ msg: "your booking canceld " });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

module.exports = eventBookingCntrl;
