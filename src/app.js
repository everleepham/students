const express = require("express");
const connectDB = require("./config/db");
const { port } = require("./config/env");
const studentRoutes = require("./routes/studentRoutes");
const app = express();
app.use(express.json());

connectDB();



app.use("/api/students", studentRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));