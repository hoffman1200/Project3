const router = require("express").Router();

// Matches with "/api/logout"
router
  .route("/")
  .get((req, res) => {
      req.logOut();
      res.redirect("/api/login")
  });

  module.exports = router;
