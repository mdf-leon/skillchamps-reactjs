import axios from "axios";

// nao pode ter/ no final da url
const baseUrl = process.env.REACT_APP_API_URL; // https://skillchamps.herokuapp.com

let base = axios.create({ // getImage
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

base.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);




export {
  baseUrl,
  base
};
