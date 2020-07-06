import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Skillchamps.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

import { ThemeProvider } from 'styled-components';

import App from "./App";
import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/Register";
import Dashboard from "./pages/signed/Dashboard";
import Rider from "./pages/signed/Rider";
import AccountOptions from "./pages/signed/AccountOptions";
import Events from "./pages/signed/Events";
import Institute from "./pages/signed/Institute";
import CreateEvent from "./pages/signed/CreateEvent";
import ManageEvent from "./pages/signed/ManageEvent";

import theme from './styles/theme';

function ProtectedRoute(props) {
  let token = localStorage.getItem('token')
  if (token == null || token == undefined) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}

function VisitorRoute(props) {
  let token = localStorage.getItem('token')
  if (token == null || token == undefined) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/dashboard" />;
  }
}


ReactDOM.render(
  <CookiesProvider>
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <VisitorRoute exact path="/login" component={Login} />
        <VisitorRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/Rider" component={Rider} />
        <ProtectedRoute exact path="/events" component={Events} />
        <ProtectedRoute exact path="/manageInstitute" component={Institute} />
        <ProtectedRoute exact path="/createEvent" component={CreateEvent} />
        <ProtectedRoute exact path="/manageEvent" component={ManageEvent} />

        <ProtectedRoute
          exact
          path="/AccountOptions"
          component={AccountOptions}
        />
        <ProtectedRoute
          exact
          path="/AccountOptions"
          component={AccountOptions}
        />
        {/* <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} /> */}
      </Switch>
    </Router>
    </ThemeProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
