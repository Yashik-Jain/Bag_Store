const express = require("express");
const isLoggedin = require("../middlewares/isLoggedin");

const router = express.Router();

router.get("/",()=>{
    res.render("index");
})

router.get("/shop",isLoggedin,function(req,res){
    res.render("shop")
})
module.exports = router