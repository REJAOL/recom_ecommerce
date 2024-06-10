const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const path = require("path")
const userRouter = require('./routes/userRoute.js')
const ownerRouter = require('./routes/ownerRoute.js')
const productRouter = require('./routes/productRoute.js')

require("dotenv").config()

const db = require('./config/mongoose-connection')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")

app.use("/user", userRouter)
app.use("/owner", ownerRouter)
app.use("/product", productRouter)

app.listen("3000", (req,res)=>{
    console.log("hello unga bunga");
})