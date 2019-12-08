import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"

import ProductsActions from "./ProductsActions"
import CategoriesActions from "./CategoriesActions"

import {
  updateCrumb,
  removeCrumb
} from "../../../store/modules/breadcrumb/actions"

export default function Products(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCrumb("Produtos", `${props.match.url}`, 1, "product"))

    return () => {
      dispatch(removeCrumb("product"))
    }
  }, [dispatch, props.match.url])

  return (
    <Switch>
      <Route
        path={`${props.match.path}/categories`}
        component={CategoriesActions}
      />
      <Route path={`${props.match.path}`} component={ProductsActions} />
    </Switch>
  )
}
