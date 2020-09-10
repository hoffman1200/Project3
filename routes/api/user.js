const router = require("express").Router();

// Matches with "/api/user"
router
  .route("/")
  .get((req, res) => {
    console.log(req, req.user)
      res.send(req.user);
  });

  module.exports = router;
