const express = require("express")

const app = express()

app.get("/", (request, response, next) => {
    response.send("Hi there!")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})