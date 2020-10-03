import {
  fetchRuleByIdError,
  fetchRuleByIdPending,
  fetchRuleByIdSuccess,
  fetchRulesError,
  fetchRulesPending,
  fetchRulesSuccess,
} from './actions'

function fetchRules() {
  return (dispatch) => {
    dispatch(fetchRulesPending())
    fetch(`${process.env.REACT_APP_API_HOST}/rule/filter?offset=1&limit=100`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchRulesSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchRulesError(error))
      })
  }
}

export function fetchRuleById(id) {
  return (dispatch) => {
    dispatch(fetchRuleByIdPending())
    fetch(
      `${process.env.REACT_APP_API_HOST}/rule/{id}?id=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchRuleByIdSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(fetchRuleByIdError(error))
      })
  }
}

export default fetchRules
