const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")
const expressSession = require("express-session")
const flash = require("connect-flash")  

require("dotenv").config()

const usersRouter = require('./routes/usersRouter.js')
const ownersRouter = require('./routes/ownersRouter.js')
const productsRouter = require('./routes/productsRouter.js')
const indexRouter = require('./routes/index.js')



const db = require('./config/mongoose-connection')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/owners", ownersRouter)
app.use("/products", productsRouter)

app.listen("3000", (req,res)=>{
    console.log("hello unga bunga");
})