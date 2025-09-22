const express = require("express");
const { signup, login, updateUser, deleteUser } = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;