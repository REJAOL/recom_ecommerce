const express = require("express")

const router = express.Router()

router.get("/", function(req,res){
    res.send("hello from owner page")
})

module.exports = router