export function createProductRequest(formData) {
  return {
    type: "CREATE_PRODUCT_REQUEST",
    payload: { formData }
  }
}

export function createProductSuccess() {
  return {
    type: "CREATE_PRODUCT_SUCCESS"
  }
}

export function createProductFailure() {
  return {
    type: "CREATE_PRODUCT_FAILURE"
  }
}

export function getProductsRequest() {
  return {
    type: "GET_PRODUCTS_REQUEST"
  }
}

export function updateProductRequest(
  name,
  description,
  price,
  category_id,
  id
) {
  return {
    type: "UPDATE_PRODUCT_REQUEST",
    payload: { name, description, price, category_id, id }
  }
}

export function updateProductSuccess() {
  return {
    type: "UPDATE_PRODUCT_SUCCESS"
  }
}

export function updateProductFailure() {
  return {
    type: "UPDATE_PRODUCT_FAILURE"
  }
}
