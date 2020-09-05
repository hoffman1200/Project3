const router = require("express").Router();
const usersControllers = require("../../controllers/loginControllers")

// Matches with "/api/login"
router
  .route("/")
  .get(usersControllers.findAll)
  .post(usersControllers.create);

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(usersControllers.findById)
  .put(usersControllers.update)
  .delete(usersControllers.remove);


    module.exports = router;
