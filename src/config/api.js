import axios from "axios";


const baseUrl = `https://skillchamps.herokuapp.com`; // https://skillchamps.herokuapp.com

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
