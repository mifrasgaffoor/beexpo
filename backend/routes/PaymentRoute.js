const express = require("express");
const router = express.Router();
const instance = require("../util/Payment");
router.get("/payment/:amount", (req, res) => {
  try {
    const { amount } = req.params;

    const options = {
      amount: amount * 100,
      currency: "USD",
      receipt: "receipt#1",
    };

    instance.orders.create(options, function (err, order) {
      console.log(order);
      if (err) {
        return res.status(400).json(error);
      }
      res.send(order);
      return res.status(200).json(order);
    });
  } catch (error) {
    return res.status(400).json({ error: "wrong" });
  }
});

module.exports = router;
