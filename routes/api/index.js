const router = require("express").Router();
const gameRoutes = require("./games");
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const userRoutes = require("./user");

router.use("/games", gameRoutes);
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);


module.exports = router;
