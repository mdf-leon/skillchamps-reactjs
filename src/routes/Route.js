import React from "react"
import { Route, Redirect } from "react-router-dom"
import { store } from "../store/index"

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = store.getState().auth.isSigned

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...rest} component={Component} />
}
