const db = require("../models");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.status(401).send("No user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({
            message: "Successfully Authenticated",
            user: {
              username: user.username,
              id: user._id,
              savedGames: user.savedGames,
              avatar: user.avatar,
            },
          });
          console.log(req.user);
        });
      }
    })(req, res, next);
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
