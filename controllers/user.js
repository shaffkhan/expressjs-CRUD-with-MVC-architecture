//requiring the model of user from models:
const User = require("./../models/user");
//handler function for getting all the users
async function getAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
}
//handler function for getting the user by id
async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ msg: "user not found" });
  }
}
//handler function for updating the user by id
async function UpdateUserById(req, res) {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  });
  if (!updatedUser) {
    res.status(404).json({ msg: "user not found" });
  }
  res.status(200).json(updatedUser);
}
//handler function for creating a new user
async function CreateNewUser(req, res) {
  if (
    !req.body.name &&
    !req.body.email &&
    !req.body.jobTitle &&
    !req.body.gender
  ) {
    res.status(400).json("error missing required feilds");
  }
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    gender: req.body.gender,
  });
  console.log(newUser);
  res.status(201).json({ msg: "success" });
}

//exporting all the handler functions
module.exports = { getAllUsers, getUserById, UpdateUserById,CreateNewUser };
