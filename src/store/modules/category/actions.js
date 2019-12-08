export function createCategoryRequest(name, description) {
  return {
    type: "CREATE_CATEGORY_REQUEST",
    payload: { name, description }
  }
}

export function createCategorySuccess() {
  return {
    type: "CREATE_CATEGORY_SUCCESS"
  }
}

export function createCategoryFailure() {
  return {
    type: "CREATE_CATEGORY_FAILURE"
  }
}

export function getCategoriesRequest() {
  return {
    type: "GET_CATEGORIES_REQUEST"
  }
}

export function getCategoriesSuccess(categories) {
  return {
    type: "GET_CATEGORIES_SUCCESS",
    payload: { categories }
  }
}

export function updateCategoryRequest(name, description, id) {
  return {
    type: "UPDATE_CATEGORY_REQUEST",
    payload: { name, description, id }
  }
}

export function updateCategorySuccess() {
  return {
    type: "UPDATE_CATEGORY_SUCCESS"
  }
}

export function updateCategoryFailure() {
  return {
    type: "UPDATE_CATEGORY_FAILURE"
  }
}
