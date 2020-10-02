import {
  fetchAlertsError,
  fetchAlertsPending,
  fetchAlertsSuccess,
} from './actions'

function fetchAlerts() {
  debugger
  return (dispatch) => {
    dispatch(fetchAlertsPending())
    fetch(`${process.env.REACT_APP_API_HOST}/alert`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchAlertsSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchAlertsError(error))
      })
  }
}

export default fetchAlerts
