import produce from "immer"

const INITIAL_STATE = {
  crumbs: [
    {
      label: "Home",
      to: "/",
      order: 0,
      key: "dashboard"
    }
  ]
}

export default function breadcrumb(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_CRUMB":
      return produce(state, draft => {
        draft.crumbs = state.crumbs
          .concat(action.payload.crumb)
          .sort((c1, c2) => c1.order - c2.order)
      })
    case "REMOVE_CRUMB":
      return produce(state, draft => {
        draft.crumbs = state.crumbs.filter(
          crumb => action.payload.key !== crumb.key
        )
      })
    default:
      return state
  }
}
