import axios from 'axios'

export default {
    install (Vue) {
        Vue.prototype.$axios = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 1000,
        }) 
    }
}