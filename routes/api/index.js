const router = require("express").Router();
const gameRoutes = require("./games");

// Book routes
router.use("/books", gameRoutes);

module.exports = router;
