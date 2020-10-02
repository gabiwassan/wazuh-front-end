import { ALERTS_ERROR, ALERTS_REQUEST, ALERTS_SUCCESS } from './types'

export const fetchAlertsPending = () => {
  return {
    type: ALERTS_REQUEST,
  }
}

export const fetchAlertsSuccess = (alerts) => {
  return {
    type: ALERTS_SUCCESS,
    alerts: alerts,
  }
}

export const fetchAlertsError = (error) => {
  return {
    type: ALERTS_ERROR,
    error: error,
  }
}

export default { fetchAlertsPending, fetchAlertsSuccess, fetchAlertsError }
