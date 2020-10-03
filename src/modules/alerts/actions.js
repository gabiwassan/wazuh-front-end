import {
  ALERT_BY_ID_ERROR,
  ALERT_BY_ID_REQUEST,
  ALERT_BY_ID_SUCCESS,
  ALERTS_ERROR,
  ALERTS_REQUEST,
  ALERTS_SUCCESS,
} from './types'

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

export const fetchAlertByIdPending = () => {
  return {
    type: ALERT_BY_ID_REQUEST,
  }
}

export const fetchAlertByIdSuccess = (alert) => {
  return {
    type: ALERT_BY_ID_SUCCESS,
    alert: alert.data[0],
  }
}

export const fetchAlertByIdError = (error) => {
  return {
    type: ALERT_BY_ID_ERROR,
    error: error,
  }
}

export default {
  fetchAlertsPending,
  fetchAlertsSuccess,
  fetchAlertsError,
  fetchAlertByIdError,
  fetchAlertByIdPending,
  fetchAlertByIdSuccess,
}
