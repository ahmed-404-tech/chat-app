const User = require("../models/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { username, password, gender } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "Username already in use" });
    }

    const newUser = new User({ username, password, gender });

    await newUser.save();
    res
      .status(201)
      .json({ message: "The account has been created successfully", newUser });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the account",
      error: error,
    });
    console.log("An error occurred while creating the account");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "invalid credential" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credential" });
    }

    res.status(202).json({ message: "You have been logged in successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while logging in", error: error });
    console.log("An error occurred while logging in");
  }
};

const updateUser = async (req, res) => {
  const { username, avatar, bio, gender } = req.body;
  const { id } = req.params;

  try {
    const editedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        avatar,
        bio,
        gender,
      },
      { new: true }
    );

    res.status(201).json(editedUser);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while trying to edit the user.",
      error: error,
    });
    console.log("An error occurred while trying to edit the user.");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the user",
      error: error,
    });
    console.log("An error occurred while deleting the user");
  }
};

module.exports = { signup, login, updateUser, deleteUser };
