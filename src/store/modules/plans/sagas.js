import { all, takeLatest, call, put } from "redux-saga/effects"

import api from "../../../services/api"
import {
  createPlanSuccess,
  createPlanFailure,
  updatePlanSuccess,
  updatePlanFailure
} from "./actions"
import history from "../../../services/history"

export function* newPlan({ payload }) {
  const {
    name,
    description,
    amount,
    setup_amount,
    grace_period,
    tolerance_period,
    duration,
    interval,
    frequency,
    currency,
    payment_methods
  } = payload

  try {
    yield call(api.post, "yourmanager/planos/create", {
      name,
      description,
      amount,
      setup_amount,
      grace_period,
      tolerance_period,
      duration,
      interval,
      frequency,
      currency,
      payment_methods
    })
    yield put(createPlanSuccess())
    history.push("/plans")
    window.location.reload(true)
  } catch (err) {
    yield put(createPlanFailure())
  }
}

export function* updatePlan({ payload }) {
  const {
    name,
    description,
    amount,
    setup_amount,
    grace_period,
    tolerance_period,
    duration,
    interval,
    frequency,
    currency,
    payment_methods,
    id
  } = payload

  try {
    yield call(api.post, `yourmanager/planos/update/${id}`, {
      name,
      description,
      amount,
      setup_amount,
      grace_period,
      tolerance_period,
      duration,
      interval,
      frequency,
      currency,
      payment_methods
    })
    yield put(updatePlanSuccess())

    history.push("/plans")
  } catch (err) {
    yield put(updatePlanFailure())
  }
}

export default all([
  takeLatest("CREATE_PLAN_REQUEST", newPlan),
  takeLatest("UPDATE_PLAN_REQUEST", updatePlan)
])
