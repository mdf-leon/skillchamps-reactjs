import axios from 'axios'

let base = axios.create({
    baseURL: `http://localhost:3333`
});

export {
    base
}