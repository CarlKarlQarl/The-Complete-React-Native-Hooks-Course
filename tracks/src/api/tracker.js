import axios from "axios"

export default axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://65ef538ee4c6.ngrok.io"
})