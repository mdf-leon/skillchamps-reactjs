import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css'
import './index.css';
import './Skillchamps.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";  
import { CookiesProvider, useCookies } from 'react-cookie';

import App from './App';
import Login from './pages/visitor/Login'
import Dashboard from './pages/signed/Dashboard'
import Rider from './pages/signed/Rider'
import AccountOptions from './pages/signed/AccountOptions'

function ProtectedRoute(props){
    const [cookies, setCookie] = useCookies("jwt");
    //console.log(cookies.jwt)
    if(cookies.jwt == null){
        //console.log("oy2")
        return (<Redirect to="/login" />)
    } else {
        //console.log("oy")
        return (<Route {...props} />)
    }
}

function VisitorRoute(props){
    const [cookies, setCookie] = useCookies("jwt");
    //console.log(cookies.jwt)
    if(cookies.jwt == null){
        //console.log("oy2")
        return (<Route {...props} />)
    } else {
        //console.log("oy")
        return (<Redirect to="/dashboard" />)
    }
}

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <VisitorRoute exact path="/login" component={Login} />
                <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/Rider" component={Rider} />
                <ProtectedRoute exact path="/AccountOptions" component={AccountOptions} />
                {/* <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} /> */}
            </Switch>
        </Router>
    </CookiesProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
