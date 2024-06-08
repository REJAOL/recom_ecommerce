const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/recom");

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    } ,
    isAdmin: Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:String,
    picture:String
})


module.exports = mongoose.model("User", userSchema)