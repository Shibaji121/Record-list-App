const express = require("express");
const Users = require("../models/users");

// create User
module.exports.createUser = async function (req, res) {
  try {
    console.log(req.body);
    const User = await Users.create(req.body.User);
    res.status(201).json({ data: { User: User } });
  } catch (error) {
    res.status(500).json(error);
  }
};
