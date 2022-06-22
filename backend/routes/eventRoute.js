const express = require("express");
const router = express.Router();
const eventCntrl = require("../controllers/eventController");

//post events
router.post("/postevent", eventCntrl.postevent);
//get all ecents 
router.get("/getallevents", eventCntrl.getallevent);
//get one post 
router.get("/singleEvent/:id", eventCntrl.singleEvent);
// /edit events
router.put("/editevent/:id", eventCntrl.editevent);
// /deleteevents
router.delete("/deleteevent/:id", eventCntrl.deletevent);






module.exports = router;
