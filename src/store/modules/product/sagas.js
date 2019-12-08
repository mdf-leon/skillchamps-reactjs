import { all, takeLatest, call, put } from "redux-saga/effects"

import api from "../../../services/api"
import {
  createProductSuccess,
  createProductFailure,
  updateProductFailure,
  updateProductSuccess
} from "./actions"
import history from "../../../services/history"

export function* newProduct({ payload }) {
  const { formData } = payload

  try {
    yield call(api.post, "yourmanager/products/create", formData)
    yield put(createProductSuccess())

    history.push("/products")
    window.location.reload(true)
  } catch (err) {
    yield put(createProductFailure())
  }
}

export function* updateProduct({ payload }) {
  const { name, description, price, category_id, id } = payload

  try {
    yield call(api.post, `yourmanager/products/update/${id}`, {
      name,
      description,
      price,
      category_id
    })
    yield put(updateProductSuccess())

    history.push("/products")
    window.location.reload(true)
  } catch (err) {
    yield put(updateProductFailure())
  }
}

export default all([
  takeLatest("CREATE_PRODUCT_REQUEST", newProduct),
  takeLatest("UPDATE_PRODUCT_REQUEST", updateProduct)
])
