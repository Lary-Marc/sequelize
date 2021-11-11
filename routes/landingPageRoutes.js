const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.LandingPage.findAll({
    //   include:[db.Comments]
  }).then((landingPage) => res.send(landingPage));
});

router.get("/:id", (req, res) => {
  db.LandingPage.findOne({
    where: {
      id: req.params.id,
    },
  }).then((landingPage) => res.send(landingPage));
});

router.post("", (req, res) => {
  db.LandingPage.create({
    img: req.body.img,
    tex1: req.body.tex1,
   text2: req.body.text2,
    text3: req.body.text3,
 
  }).then((addlandingPage) => res.send(addlandingPage));
});

router.delete("/:id", (req, res) => {
  db.LandingPage.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.LandingPage.update(
    {
        img: req.body.img,
        tex1: req.body.tex1,
       text2: req.body.text2,
        text3: req.body.text3,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
