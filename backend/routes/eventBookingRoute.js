const express = require("express");
const router = express.Router();
const eventBookingCntrl = require("../controllers/eventBookingController");

// booking events
router.post("/bookingevent", eventBookingCntrl.eventbooking);
router.post("/eventbookingBtId", eventBookingCntrl.eventbookingBtId);
router.post("/eventbookingCancel", eventBookingCntrl.eventbookingCancel);
router.get("/getalleventbookings", eventBookingCntrl.eventbookingall);

module.exports = router;
