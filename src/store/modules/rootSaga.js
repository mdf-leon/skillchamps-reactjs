import { all } from "redux-saga/effects"
import auth from "./auth/sagas"
import category from "./category/sagas"
import product from "./product/sagas"
import breadcrumb from "./breadcrumb/sagas"
import plans from "./plans/sagas"

export default function* rootSaga() {
  return yield all([auth, category, product, breadcrumb, plans])
}
