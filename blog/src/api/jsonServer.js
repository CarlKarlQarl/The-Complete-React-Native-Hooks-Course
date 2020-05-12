import axios from "axios"

//Change URL here
const server = "http://08496cc5.ngrok.io"

export default axios.create({
    baseURL: server
})