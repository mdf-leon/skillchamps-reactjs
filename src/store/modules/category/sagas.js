import { all, takeLatest, call, put } from "redux-saga/effects"

import api from "../../../services/api"
import {
  createCategorySuccess,
  createCategoryFailure,
  getCategoriesSuccess,
  updateCategorySuccess,
  updateCategoryFailure
} from "./actions"
import history from "../../../services/history"

export function* newCategory({ payload }) {
  const { name, description } = payload

  try {
    yield call(api.post, "/yourmanager/category/create", {
      name,
      description
    })
    yield put(createCategorySuccess())

    history.push("/products/categories")
    window.location.reload(true)
  } catch (err) {
    yield put(createCategoryFailure())
  }
}

export function* getCategories() {
  try {
    const response = yield call(api.get, "yourmanager/category/all")
    yield put(getCategoriesSuccess(response.data))
  } catch (err) {
    console.tron.log(err)
  }
}

export function* updateCategory({ payload }) {
  const { name, description, id } = payload
  try {
    yield call(api.post, `yourmanager/category/update/${id}`, {
      name,
      description
    })
    yield put(updateCategorySuccess())
    history.push("/products/categories")
    window.location.reload(true)
  } catch (err) {
    yield put(updateCategoryFailure())
  }
}

export default all([
  takeLatest("CREATE_CATEGORY_REQUEST", newCategory),
  takeLatest("GET_CATEGORIES_REQUEST", getCategories),
  takeLatest("UPDATE_CATEGORY_REQUEST", updateCategory)
])
