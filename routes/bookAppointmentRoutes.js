const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("", (req, res) => {
  db.BookAppointment.findAll({
    //   include:[db.Comments]
  }).then((bookAppointment) => res.send(bookAppointment));
});

router.get("/:id", (req, res) => {
  db.BookAppointment.findOne({
    where: {
      id: req.params.id,
    },
  }).then((bookAppointment) => res.send(bookAppointment));
});

router.post("", (req, res) => {
  db.BookAppointment.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.bodyemail,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    location: req.body.location,
    specialty: req.body.specialty,
    toa: req.body.toa,
    doa: req.body.doa,
    dob: req.body.dob,
    pmi: req.body.pmi,
  }).then((addbookAppointment) => res.send(addbookAppointment));
});

router.delete("/:id", (req, res) => {
  db.BookAppointment.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.patch("/:id", (req, res) => {
  db.BookAppointment.update(
    {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.bodyemail,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        location: req.body.location,
        specialty: req.body.specialty,
        toa: req.body.toa,
        doa: req.body.doa,
        dob: req.body.dob,
        pmi: req.body.pmi,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => res.send("success"));
});
module.exports = router;
