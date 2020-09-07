const router = require("express").Router();

// Matches with "/api/logout"
router
  .route("/")
  .get((req, res) => {
      req.logOut();
      res.send("Logged Out")
      console.log("Logged Out")
  });

  module.exports = router;
