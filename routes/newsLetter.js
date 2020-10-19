var express = require("express");
var router = express.Router();
const NewsLetterModel = require("../models/NewsLetter");

router.post("/newUser", (req, res) => {
  var email = req.body.email;

  NewsLetterModel.find({ email: email })
    .then((userexist) => {
      if (userexist.length === 0) {
        NewsLetterModel.create(req.body)
          .then((newUser) => res.status(200).send(newUser))
          .catch((err) => {
            res.status(500).json(err);
          });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
