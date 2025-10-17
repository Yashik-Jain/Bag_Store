const express = require("express")
const ownermodel = require("../models/owners.models.js")
const router = express.Router();


router.get("/",function(req,res){
    res.send("Hey")
})


if(process.env.NODE_ENV==="development") {
    router.post("/create",async function(req,res) {
        let owners = await ownermodel.find();
        if(owners.length>0) return res.send(503).send("Cannot create new owners..");
        let {fullname,email,password} = req.body();
       let createduser = await ownermodel.create({
            fullname,
            email,
            password
        })
        res.status(202).send(createduser);
    });
}
module.exports = router;