import axios from "axios"

const api = axios.create({
  baseURL: "http://54.197.150.182/api/"
})

export default api
