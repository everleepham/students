const mongoose = require("mongoose");
const { mongoURI } = require("./env");

const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
    } catch (err) {
      console.error("MongoDB Connection Error:", err);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;