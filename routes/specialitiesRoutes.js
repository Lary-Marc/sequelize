const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Specialty.findAll({
    //   include:[db.Comments]
  }).then((specialty) => res.send(specialty));
});

router.get("/:id", (req, res) => {
  db.Specialty.findOne({
    where: {
      id: req.params.id,
    },
  }).then((specialty) => res.send(specialty));
});

router.post("", (req, res) => {
  db.Specialty.create({
    title: req.body.title,
    description: req.body.description,
   readMore: req.body.readMore,
    phoneNumber: req.body.phoneNumber,
 
  }).then((addspecialty) => res.send(addspecialty));
});

router.delete("/:id", (req, res) => {
  db.Specialty.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Specialty.update(
    {
        title: req.body.title,
        description: req.body.description,
       readMore: req.body.readMore,
        phoneNumber: req.body.phoneNumber,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
