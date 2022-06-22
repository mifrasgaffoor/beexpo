const express = require("express");
const router = express.Router();
const eventPaymentSaveCntrl = require("../controllers/eventPaymentController");

// payment save  events
router.post("/eventpaysave", eventPaymentSaveCntrl.savepay);

module.exports = router;
