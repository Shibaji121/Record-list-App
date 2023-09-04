const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.route("/create").post(usersController.createUser);
router.route("/:id").get(usersController.getUserById);

module.exports = router;
