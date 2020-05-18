const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const User = mongoose.model("User")

const router = express.Router()

router.post("/signup", async (request, response, next) => {
    const { email, password } = request.body

    try {
        const user = new User({email, password})
        await user.save()

        const token = jwt.sign({userID: user._id}, "MY_SECRET_KEY")
        response.send({token: token})
    } catch (error) {
        return response.status(422).send(error.message)
    }
})

module.exports = router