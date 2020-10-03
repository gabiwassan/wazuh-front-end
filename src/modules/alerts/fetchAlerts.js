import {
  fetchAlertByIdError,
  fetchAlertByIdPending,
  fetchAlertByIdSuccess,
  fetchAlertsError,
  fetchAlertsPending,
  fetchAlertsSuccess
} from './actions'

function fetchAlerts() {
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

export function fetchAlertById(id) {
  return (dispatch) => {
    dispatch(fetchAlertByIdPending())
    fetch(
      `${process.env.REACT_APP_API_HOST}/alert/filter?offset=1&limit=100&id=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchAlertByIdSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchAlertByIdError(error))
      })
  }
}

export default fetchAlerts