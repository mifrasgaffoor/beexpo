const express = require("express");
const router = express.Router();
const companyCntrl = require("../controllers/companyController");

router.post("/companyregister", companyCntrl.companyregister);

module.exports = router;
