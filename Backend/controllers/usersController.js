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

// get user by id
module.exports.getUserById = async function (req, res) {
  try {
    const User = await Users.findById(req.params.id);
    res.status(200).json({ data: { User: User } });
  } catch (error) {
    res.status(500).json(error);
  }
};
