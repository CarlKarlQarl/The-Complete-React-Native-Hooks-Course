import axios from "axios"

export default axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://812f2fb9437f.ngrok.io"
})