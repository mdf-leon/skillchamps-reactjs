export function signInRequest(email, password) {
  return {
    type: "SIGN_IN_REQUEST",
    payload: { email, password }
  }
}

export function signInSuccess(token, user) {
  return {
    type: "SIGN_IN_SUCCESS",
    payload: { token, user }
  }
}

export function signInFailure() {
  return {
    type: "SIGN_FAILURE"
  }
}

export function logOutRequest() {
  return {
    type: "LOG_OUT_REQUEST"
  }
}

export function signUpIndividualRequest(
  email,
  password,
  password_r,
  cpf,
  phone_number,
  birthdate,
  name_complet,
  CEP,
  line1,
  neighborhood,
  city,
  state,
  country_code,
  address_number,
  complement,
  area_activity
) {
  return {
    type: "SIGN_UP_INDIVIDUAL_REQUEST",
    payload: {
      email,
      password,
      password_r,
      cpf,
      phone_number,
      birthdate,
      name_complet,
      CEP,
      line1,
      neighborhood,
      city,
      state,
      country_code,
      address_number,
      complement,
      area_activity
    }
  }
}

export function signUpLegalRequest(
  email,
  password,
  password_r,
  cpf,
  phone_number,
  birthdate,
  name_complet,
  CEP,
  line1,
  complement,
  neighborhood,
  city,
  state,
  country_code,
  address_number,
  area_activity,
  cnpj,
  opening_date,
  business_name,
  statement_descriptor
) {
  return {
    type: "SIGN_UP_LEGAL_REQUEST",
    payload: {
      email,
      password,
      password_r,
      cpf,
      phone_number,
      birthdate,
      name_complet,
      CEP,
      line1,
      complement,
      neighborhood,
      city,
      state,
      country_code,
      address_number,
      area_activity,
      cnpj,
      opening_date,
      business_name,
      statement_descriptor
    }
  }
}

export function signUpSuccess() {
  return {
    type: "SIGN_UP_SUCCESS"
  }
}
