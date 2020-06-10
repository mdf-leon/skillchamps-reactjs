import axios from "axios";

let base = axios.create({
  baseURL: `https://skillchamps.herokuapp.com`, // https://skillchamps.herokuapp.com
  headers: {
    Authorization : `Bearer ${localStorage.getItem('token')}`
  }
});

export {
  base
};
