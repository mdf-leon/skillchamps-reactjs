import React from "react"
import { Switch, Redirect } from "react-router-dom"
import Route from "./Route"

import "../config/Reactotron"
import Auth from "../Pages/Auth"
import Login from "../Pages/Login"
// import Register from "../views/Pages/Register"
// import Auth from "../views/Pages/Auth"

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    {/* <Route path="/" component={Auth} /> */}
    {/* <Route exact path="/signup" component={Register} /> */}
    <Route path="/(dashboard)?" component={Auth} isPrivate />
    <Redirect from="*" to="/" />
  </Switch>
)

export default Routes
