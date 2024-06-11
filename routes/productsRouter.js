const express = require("express")

const router = express.Router()
const upload = require("../config/multer-config.js")
const productModel = require("../models/product-model.js")

router.get("/", function (req, res) {
    res.send("hello from product page")
})

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body

        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        })
        req.flash("success", "Product created Successfully")
        res.redirect("/owners/admin")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router