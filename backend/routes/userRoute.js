const express = require("express");
const router = express.Router();
const userCntrl = require("../controllers/userController");
const {verifyUser,auth,verifyAdmin,verifyMentor,verifyCompany,verifyStudent} =  require("../middleware/auth")


router.post("/userregister" , userCntrl.userregister);
router.post("/userlogin" , userCntrl.userlogin)
router.get("/checkauthentication" , auth,  userCntrl.checkauthentication)






module.exports = router