const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Comments.findAll({
    include: [db.Replies],
  }).then((comments) => res.send(comments));
});

router.get("/:id", (req, res) => {
  db.Comments.findOne({
    where: {
      id: req.params.id,
    },
  }).then((comment) => res.send(comment));
});

router.post("", (req, res) => {
  db.Comments.create({
    text: req.body.text,
    date: req.body.date,
    ResearchId: req.body.ResearchId,
  }).then((addcomment) => res.send(addcomment));
});

router.delete("/:id", (req, res) => {
  db.Comments.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Comments.update(
    {
      text: req.body.text,
      date: req.body.date,
      ResearchId: req.body.ResearchId,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
