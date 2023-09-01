const express = require("express");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./config/mongoose");
const Users = require("./models/users");
app.use(express.urlencoded());
app.use(bodyParser.json());

// Configure CORS to allow requests from localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Enable passing cookies, if needed
  })
);
app.use("/", require("./routes/index"));

app.listen(port, function (error) {
  if (error) {
    console.log("Error Occured", error);
  }
  console.log("Express server starts on :", port);
});
