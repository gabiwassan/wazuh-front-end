import {
  ALERT_BY_ID_ERROR,
  ALERT_BY_ID_REQUEST,
  ALERT_BY_ID_SUCCESS,
  ALERTS_ERROR,
  ALERTS_REQUEST,
  ALERTS_SUCCESS
} from './types'

const initialState = {
  pending: false,
  alerts: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERTS_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case ALERTS_SUCCESS:
      return {
        ...state,
        pending: false,
        alerts: action.alerts,
      }
    case ALERTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    case ALERT_BY_ID_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case ALERT_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        alert: action.alert,
      }
    case ALERT_BY_ID_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }

    default:
      return state
  }
}

export const getAlerts = (state) => state.alert.alerts
export const getAlertsPending = (state) => state.alert.pending
export const getAlertsError = (state) => state.alert.error

export const getAlertById = (state) => state.alert.alert
export const getAlertByIdPending = (state) => state.alert.pending
export const getAlertByIdError = (state) => state.alert.error
