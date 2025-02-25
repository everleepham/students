const dotenv = require("dotenv");

const ENV = process.env.NODE_ENV || "development";

dotenv.config({ path: `.env.${ENV}` });

console.log(`Running in ${ENV} mode`);
console.log(`MongoDB URI: ${process.env.MONGO_URI}`);

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5001,
};