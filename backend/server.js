
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/mydb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// ✅ BOTH TASKS CONNECTED HERE
app.use("/api/todos", todoRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});