const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Research.findAll({
      include:[db.Comments]
  }).then((research) => res.send(research));
});

router.get("/:id", (req, res) => {
  db.Research.findOne({
    where: {
      id: req.params.id,
    },
  }).then((research) => res.send(research));
});

router.post("", (req, res) => {
  db.Research.create({
    title: req.body.title,
    blog: req.body.blog,
    date: req.body.date,
  }).then((addresearch) => res.send(addresearch));
});

router.delete("/:id", (req, res) => {
  db.Research.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Research.update(
    {
      
      title: req.body.title,
      blog: req.body.blog,
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
