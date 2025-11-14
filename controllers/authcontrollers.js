const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generatetoken.js");
const userModel = require("../models/user.models.js");
module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    let user = await userModel.find({ email: email });
    if (user) return res.status(401).send("Account Already Exists");
    bcrypt.genSalt(10, function (req, res) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created successfully");
        }
      });
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (!user) return res.send("Email or Password incorrect..");

  bcrypt.compare(password, user.password, function (err, result) {
    if(result) {
    let token = generateToken(user);
    res.cookie("token",token);
    res.send("You can login");
    } else {
      res.send("Email or Password incorrect");
    }
  });
};
