import { combineReducers } from "redux"
import auth from "./auth/reducer"
import category from "./category/reducer"
import product from "./product/reducer"
import breadcrumb from "./breadcrumb/reducer"
import plans from "./plans/reducer"

export default combineReducers({
  auth,
  category,
  product,
  breadcrumb,
  plans
})
