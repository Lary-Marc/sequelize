const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Tips.findAll({
    //   include:[db.Comments]
  }).then((tips) => res.send(tips));
});

router.get("/:id", (req, res) => {
  db.Tips.findOne({
    where: {
      id: req.params.id,
    },
  }).then((tips) => res.send(tips));
});

router.post("", (req, res) => {
  db.Tips.create({
    title: req.body.title,
    description: req.body.description,

  }).then((addtips) => res.send(addtips));
});

router.delete("/:id", (req, res) => {
  db.Tips.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Tips.update(
    {
        title: req.body.title,
    description: req.body.description,

    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
