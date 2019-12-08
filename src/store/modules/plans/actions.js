export function createPlanRequest(
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
) {
  return {
    type: "CREATE_PLAN_REQUEST",
    payload: {
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
    }
  }
}

export function createPlanSuccess() {
  return {
    type: "CREATE_PLAN_SUCCESS"
  }
}

export function createPlanFailure() {
  return {
    type: "CREATE_PLAN_FAILURE"
  }
}

export function updatePlanRequest(
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
) {
  return {
    type: "UPDATE_PLAN_REQUEST",
    payload: {
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
    }
  }
}

export function updatePlanSuccess() {
  return {
    type: "UPDATE_PLAN_SUCCESS"
  }
}

export function updatePlanFailure() {
  return {
    type: "UPDATE_PLAN_FAILURE"
  }
}
