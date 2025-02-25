const express = require("express");
const connectDB = require("./config/db");
const { port } = require("./config/env");

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Node.js API is running");
});

app.listen(port, () => console.log(`Server running on port ${port}`));