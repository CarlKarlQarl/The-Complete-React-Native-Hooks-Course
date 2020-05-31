import axios from "axios"

export default axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://1da879c49835.ngrok.io"
})