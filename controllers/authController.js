const userModel = require("../models/user-model.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../utils/generateToken.js")

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname } = req.body

        let user = await userModel.findOne({ email: email })
        if (user) return res.status(401).send("Account exists, please login!!!")

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message)
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname
                    })

                    let token = generateToken(user);
                    res.cookie = ("token", token)
                    res.send("user created successfully")
                }
            })
        })
    } catch (err) {
        res.send(err.message);
    }

}

module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body

    let user = await userModel.findOne({ email: email })
    if (!user) return res.send("Email or password is incorrect")

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = generateToken(user)
            res.cookie("token", token)
            res.send("you can login")
        } else {
            res.send("Email or password is incorrect")
        }
    })
}