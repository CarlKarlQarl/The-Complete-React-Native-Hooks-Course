import axios from "axios"

export default axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://3b58b40dc0cc.ngrok.io"
})