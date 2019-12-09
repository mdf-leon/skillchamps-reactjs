import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'
import './Skillchamps.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { CookiesProvider, useCookies } from 'react-cookie';

import App from './App';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

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

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} />
            </Switch>
        </Router>
    </CookiesProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
