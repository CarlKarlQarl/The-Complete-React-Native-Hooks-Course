const express = require("express")
const mongoose =  require("mongoose")

const app = express()

const mongoURI = `mongodb+srv://Karl123:PasswordPassword123@cluster0-9zazp.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance")
})
mongoose.connection.on("error", (error) => {
    console.log("Error connecting to mongo", error)
})

app.get("/", (request, response, next) => {
    response.send("Hi there!")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})