const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.UserSignup.findAll({
    //   include:[db.Comments]
  }).then((userSignup) => res.send(userSignup));
});

router.get("/:id", (req, res) => {
  db.UserSignup.findOne({
    where: {
      id: req.params.id,
    },
  }).then((userSignup) => res.send(userSignup));
});

router.post("", (req, res) => {
  db.UserSignup.create({
    username: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,

  }).then((adduserSignup) => res.send(adduserSignup));
});

router.delete("/:id", (req, res) => {
  db.UserSignup.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.UserSignup.update(
    {
      username: req.body.firstName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
