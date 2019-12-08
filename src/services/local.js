import axios from "axios"

const local = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})

export default local
