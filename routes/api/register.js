const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers")

// Matches with "/api/register"
router
  .route("/")
  .get(usersControllers.findAll)
  .post(usersControllers.create);

// Matches with "/api/register/:id"
router
  .route("/:id")
  .get(usersControllers.findById)
  .put(usersControllers.update)
  .delete(usersControllers.remove);


    module.exports = router;