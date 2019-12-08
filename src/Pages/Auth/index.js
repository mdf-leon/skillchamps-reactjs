import React from "react"
import LayoutPage from "../../components/LayoutPage"
import { Switch, Route, Redirect } from "react-router-dom"
import ProductsPage from "./ProductsPage"
import Dashboard from "./Dashboard"
import Plans from "./Plans"

function Auth(props) {
  return (
    <>
      <LayoutPage {...props}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/plans" component={Plans} />
          <Redirect from="*" to="/" />
        </Switch>
      </LayoutPage>
    </>
    // {/* <Switch>
    //     <Route exact path="/dashboard" component={Dashboard} />
    //     <Route exact path="/establishments" component={Establishments} />
    //     <Route path="/category" component={Category} />
    //     <Route path="/product" component={Product} />
    //     <Route path="/settings" component={UserSettings} />
    //     <Route path="/plans" component={Plans} />
    //     <Redirect from="*" to="/dashboard" />
    //   </Switch> */}
    // {/* <AdminFooter /> */}
  )
}

export default Auth
