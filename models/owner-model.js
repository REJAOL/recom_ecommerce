const mongoose = require("mongoose")



const ownerSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    isAdmin: Boolean,
    products:{
        type:Array,
        default:[]
    },
    contact:String,
    picture:String,
    tin:String,
})


module.exports = mongoose.model("Owner", ownerSchema)