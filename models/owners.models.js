const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
    fulname : {
        type : String,
        trim : true,
        minLength : 3
    },
    email : String,
    password : String,
    password : String,
    products : {
        type : Array,
        default : []
    },
    picture : String,
    gstin:String
})

module.exports = mongoose.model("owner",ownerSchema)