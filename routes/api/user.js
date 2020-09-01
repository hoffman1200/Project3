const router = require("express").Router();

// Matches with "/api/user"
router
  .route("/")
  .get((req, res) => {
      res.send(req.user);
  });

  module.exports = router;
