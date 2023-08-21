const express = require("express");
//getting all the controller methods from controllers:
const {
  getAllUsers,
  getUserById,
  UpdateUserById,
  CreateNewUser,
} = require("../controllers/user");
console.log(getAllUsers);
//using router for users routes:
const router = express.Router();
//endpoint for getting all users or creating a new user if we get a request on /api/v1/users/:
router.route("/").get(getAllUsers).post(CreateNewUser);
//endpoint to find a user by id or update the user if we get a request on /api/v1/users/:id:
router.route("/:id").get(getUserById).patch(UpdateUserById);
module.exports = router;
