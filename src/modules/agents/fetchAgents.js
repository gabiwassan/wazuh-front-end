import {
  fetchAgentByIdError,
  fetchAgentByIdPending,
  fetchAgentByIdSuccess,
  fetchAgentsError,
  fetchAgentsPending,
  fetchAgentsSuccess,
} from './actions'

function fetchAgents() {
  return (dispatch) => {
    dispatch(fetchAgentsPending())
    fetch(`${process.env.REACT_APP_API_HOST}/agent/filter?offset=1&limit=100`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchAgentsSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchAgentsError(error))
      })
  }
}

export function fetchAgentById(id) {
  return (dispatch) => {
    dispatch(fetchAgentByIdPending())
    fetch(
      `${process.env.REACT_APP_API_HOST}/agent/{id}?id=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchAgentByIdSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchAgentByIdError(error))
      })
  }
}

export default fetchAgents
