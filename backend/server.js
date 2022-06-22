const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const dbconnect = require("./config/db");

const { v4: uuidv4 } = require("uuid");

//import routes
const eventRoute = require("./routes/eventRoute");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const studentProfileRoute = require("./routes/studentProfileRoute");
const eventBookingRoute = require("./routes/eventBookingRoute");
const paymentRoute = require("./routes/PaymentRoute");
const paysave = require("./routes/eventPaymentRoute");
//middleware
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

//Routes
app.use("/api/blog", blogRoute);
app.use("/api/event", eventRoute);
app.use("/api/user", userRoute);
app.use("/api/studentprofile", studentProfileRoute);
app.use("/api/eventbooking", eventBookingRoute);
app.use("/api/pay", paymentRoute);
app.use("/api/savepay", paysave);

//call database
dbconnect();

//home api
app.get("/", (req, res) => {
  res.send("ok");
  console.log(req);
});




//PORT
app.listen(process.env.PORT, () => {
  console.log("server has been started");
});
