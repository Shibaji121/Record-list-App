const express = require("express");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded());
app.use(bodyParser.json());

app.listen(port, function (error) {
  if (error) {
    console.log("Error Occured", error);
  }
  console.log("Express server starts on :", port);
});
