import axios from "axios"

//Change URL here
const server = "http://565d1b13.ngrok.io"

export default axios.create({
    baseURL: server
})