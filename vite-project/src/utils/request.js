import Axios from 'axios'
import Config from "@/config"

const baseURL = Config.API_URL
const axios = Axios.create({
    timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        if(!response.url.includes("//")){
            response.url = Config.API_URL + response.url;
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            console.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        } else {
            console.error(`${error}`)
        }
        return Promise.reject(error)
    }
)
export default axios