export function updateCrumb(label, to, order, key) {
  return {
    type: "UPDATE_CRUMB",
    payload: { crumb: { label, to, order, key } }
  }
}

export function removeCrumb(key) {
  return {
    type: "REMOVE_CRUMB",
    payload: { key }
  }
}
