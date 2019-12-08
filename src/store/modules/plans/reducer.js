import produce from "immer"

const INITIAL_STATE = {
  loading: false
}

export default function plans(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_PLAN_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "CREATE_PLAN_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "CREATE_PLAN_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_PLAN_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "UPDATE_PLAN_SUCCESS":
      return produce(state, draft => {
        draft.loading = false
      })
    case "UPDATE_PLAN_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    default:
      return state
  }
}
