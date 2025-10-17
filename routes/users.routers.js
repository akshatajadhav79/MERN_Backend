const express = require("express");
const router = express.Router();
const {createUser} = require("../controller/user.controller")



// Example POST route (optional for later)
router.post("/create", createUser);

module.exports = router;
