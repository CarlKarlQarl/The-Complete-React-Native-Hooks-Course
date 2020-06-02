import axios from "axios"

export default axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://1850898e7ac6.ngrok.io"
})