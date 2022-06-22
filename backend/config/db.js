const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config({ path: "../config.env" });

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
