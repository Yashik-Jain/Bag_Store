const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/authcontrollers.js")
const loginUser = require("../controllers/authcontrollers.js")
router.get("/", function (req, res) {
  res.send("Hey");
});

router.post("/register",registerUser);
router.post("/loginster",loginUser);
module.exports = router;
