import { all, takeLatest, call, put } from "redux-saga/effects"

import api from "../../../services/api"
import { signInSuccess, signUpSuccess, signInFailure } from "./actions"
import history from "../../../services/history"

export function* signIn({ payload }) {
  const { email, password } = payload

  try {
    const response = yield call(api.post, "authenticate", { email, password })

    const { token, name, role } = response.data

    const user = {
      name,
      email,
      role
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))

    history.push("/dashboard")
  } catch (err) {
    yield put(signInFailure())
  }
}

export function* signUpIndividual({ payload }) {
  const {
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
  } = payload
  const response = yield call(api.post, "register/privatePerson", {
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
  })
  console.tron.log(response.data)
  yield put(signUpSuccess())

  history.push("/login")
}

export function* signUpLegal({ payload }) {
  const {
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
  } = payload
  const response = yield call(api.post, "register/juridicalPerson", {
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
  })
  console.tron.log(response.data)
  yield put(signUpSuccess())
}

export function setToken({ payload }) {
  if (!payload) {
    return
  }

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("SIGN_IN_REQUEST", signIn),
  takeLatest("SIGN_UP_INDIVIDUAL_REQUEST", signUpIndividual),
  takeLatest("SIGN_UP_LEGAL_REQUEST", signUpLegal)
])
