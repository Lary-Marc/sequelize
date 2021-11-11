const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Events.findAll({
    include: [db.EventReg],
  }).then((events) => res.send(events));
});

router.get("/:id", (req, res) => {
  db.Events.findOne({
    where: {
      id: req.params.id,
    },
  }).then((events) => res.send(events));
});

router.post("", (req, res) => {
  db.Events.create({
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    location: req.body.location,
    image: req.body.image,
    date: req.body.date,
  }).then((addEvents) => res.send(addEvents));
});

router.delete("/:id", (req, res) => {
  db.Events.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Events.update(
    {
      title: req.body.title,
      descrption: req.body.descrption,
      time: req.body.time,
      location: req.body.location,
      image: req.body.image,
      date: req.body.date,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
