const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.EventReg.findAll().then((eventReg) => res.send(eventReg));
});

router.get("/:id", (req, res) => {
  db.EventReg.findOne({
    where: {
      id: req.params.id,
    },
  }).then((eventReg) => res.send(eventReg));
});

router.post("", (req, res) => {
  db.EventReg.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    EventId: req.body.EventId,
  }).then((addEventReg) => res.send(addEventReg));
});

router.delete("/:id", (req, res) => {
  db.EventReg.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.EventReg.update(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      EventId: req.body.EventId,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
