import produce from "immer"

const INITIAL_STATE = {
  loading: false
}

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_PRODUCT_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "CREATE_PRODUCT_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_PRODUCT_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "UPDATE_PRODUCT_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_PRODUCT_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    case "CREATE_PRODUCT_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    default:
      return state
  }
}
