import axios from 'axios'
// import { withCookies, Cookies, useCookies } from 'react-cookie';


// let cookies = instanceOf(Cookies).isRequired

// axios.defaults.withCredentials = true

let base = axios.create({
    baseURL: `http://localhost:3333`, // 192+168+0+23 3333
    headers: {
        // Authorization : `Bearer ${GetJWT}`
    }
});

function GetJWT(cookies) {
    // const [cookie] = useCookies("jwt")
    // let jwt = cookies.get('jwt')
    // console.log(cookie)
    return cookies
}

// const NewComponent = withCookies(GetJWT);
// NewComponent.WrappedComponent === GetJWT;

export {
    base,
    // GetJWT
}