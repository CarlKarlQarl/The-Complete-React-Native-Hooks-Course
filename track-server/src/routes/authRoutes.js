const express = require("express")
const mongoose = require("mongoose")
const User = mongoose.model("User")

const router = express.Router()

router.post("/signup", async (request, response, next) => {
    const { email, password } = request.body

    try {
        const user = new User({email, password})
        await user.save()

        response.send("You made a post request")
    } catch (error) {
        return response.status(422).send(error.message)
    }
})

module.exports = router