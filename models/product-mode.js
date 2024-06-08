const mongoose = require("mongoose")



const productSchema = mongoose.Schema({
   name:String,
    image:String,
    price:Number,
    discount: {
        type:Nmmber,
        default:0
    },
    bgColor:String,
    paneColor:String,
    textColor:String
})


module.exports = mongoose.model("Product", productSchema)