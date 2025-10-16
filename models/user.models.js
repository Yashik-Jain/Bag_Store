const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fulname : {
        type : String,
        trim : true,
        minLength : 3
    },
    email : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,
    password : String,
    orders : {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
})

module.exports = mongoose.model("user",userSchema)