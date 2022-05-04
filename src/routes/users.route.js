const express = require("express");
const UserSchema = require("../models/users.model");

const router = express.Router();

//create a new user
router.post("/users", (req, res) => {
  // res.send("create a new user");
  const user = UserSchema(req.body);

  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


//get all user
router.get("/users", (req, res) => {
  // res.send("create a new user");

  UserSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get user
router.get("/users/:id", (req, res) => {
  // res.send("create a new user");
  const { id } = req.params;

  UserSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


//Update user
router.put("/users/:id", (req, res) => {

  const { id } = req.params;
  const { name, email } = req.body;
  UserSchema
    .updateOne({ _id: id }, { $set: { name: name, email: email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


//delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  UserSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
