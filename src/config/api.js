import axios from "axios";

// nao pode ter/ no final da url
const baseUrl = `http://backend.skillchamps.net`; // https://skillchamps.herokuapp.com

let base = axios.create({ // getImage
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});




export {
  baseUrl,
  base
};
