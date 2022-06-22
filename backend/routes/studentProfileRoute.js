const express = require("express");
const router = express.Router();
const stnCntrl = require("../controllers/studentController");

//post events
router.post("/postprofileofstudent", stnCntrl.postprofileofstudent);
//get all ecents
router.get("/getallstudents", stnCntrl.getallstudents);
//get one post
router.get("/onestudent/:id", stnCntrl.onestudent);
// /edit events
router.put("/editstudentprofile/:id", stnCntrl.editstudentprofile);
// /deleteevents
router.delete("/deletestudentprofile/:id", stnCntrl.deletestudentprofile);

module.exports = router;
