import axios from "axios"
import { AsyncStorage } from "react-native"

const instance = axios.create({
    //Change each time you restart ngrok, or every 8 hours
    baseURL:"http://f560207c5898.ngrok.io"
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance