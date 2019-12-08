import produce from "immer"

const INITIAL_STATE = {
  token: null,
  loading: false,
  isSigned: false,
  user: null
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return produce(state, draft => {
        draft.loading = true
      })
    case "SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.token = action.payload.token
        draft.user = action.payload.user
        draft.isSigned = true
        draft.loading = false
      })
    case "SIGN_FAILURE":
      return produce(state, draft => {
        draft.loading = false
      })
    case "LOG_OUT_REQUEST":
      return produce(state, draft => {
        draft.token = null
        draft.isSigned = false
      })
    default:
      return state
  }
}
