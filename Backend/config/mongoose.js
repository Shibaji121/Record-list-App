const mongoose = require("mongoose");

//connection to database
mongoose.connect("mongodb://0.0.0.0/recordsList");

//this will used as acessing database
mongoose.set("strictQuery", true);
const db = mongoose.connection;

//If error occured
db.on("error", console.error.bind(console, "Error connecting to db"));

//Check Successfully connection
db.once("open", function () {
  console.log("Successfully connected to the database");
});
