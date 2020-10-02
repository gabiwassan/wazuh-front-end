import { ALERTS_ERROR, ALERTS_REQUEST, ALERTS_SUCCESS } from './types'

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

    default:
      return state
  }
}

export const getAlerts = (state) => state.alert.alerts
export const getAlertsPending = (state) => state.alert.pending
export const getAlertsError = (state) => state.alert.error
