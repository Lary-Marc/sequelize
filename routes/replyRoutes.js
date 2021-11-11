const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.Replies.findAll().then((replies) => res.send(replies));
});

router.get("/:id", (req, res) => {
  db.Replies.findOne({
    where: {
      id: req.params.id,
    },
  }).then((replie) => res.send(replie));
});


router.post("", (req, res) => {
  db.Replies.create({
    text: req.body.text,
    date: req.body.date,
    CommentId: req.body.CommentId,
  }).then((addreplie) => res.send(addreplie));
});

router.delete("/:id", (req, res) => {
  db.Replies.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.Replies.update(
    {
      
      text: req.body.text,
      date: req.body.date,
      CommentsId: req.body.CommentsId,
     
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
