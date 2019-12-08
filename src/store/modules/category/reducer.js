import produce from "immer"

const INITIAL_STATE = {
  loading: false,
  categories: []
}

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_CATEGORY_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "CREATE_CATEGORY_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "CREATE_CATEGORY_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_CATEGORY_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "UPDATE_CATEGORY_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_CATEGORY_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    case "GET_CATEGORIES_SUCCESS":
      return produce(state, draft => {
        draft.categories = action.payload.categories
      })
    default:
      return state
  }
}
