const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.route("/create").post(usersController.createUser);

module.exports = router;
