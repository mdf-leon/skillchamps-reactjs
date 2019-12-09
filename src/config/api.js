import axios from 'axios'

let base = axios.create({
    baseURL: `http://localhost:28015/authenticate`
});

export {
    base
}