import axios from 'axios'

axios.defaults.withCredentials = true
let base = axios.create({
    baseURL: `http://192.168.0.23:3333` // 192+168+0+23 3333
});

export {
    base
}