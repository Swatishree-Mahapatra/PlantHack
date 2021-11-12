const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

mongoose.connect("mongodb://localhost:27017/OctohackDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", () => {
  console.log("error connecting to mongo");
});
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is runnng at port", PORT);
});
