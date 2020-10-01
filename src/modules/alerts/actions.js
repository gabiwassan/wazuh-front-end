import { ALERTS_LISTED, ALERTS_REQUEST } from './types'
import alertService from '../../services/alert.service'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ALERTS_REQUEST:
      return {
        ...state,
        data: state,
      }

    default:
      return state
  }
}

export const getAlerts = () => {
  debugger
  return async (dispatch) => {
    const response = await alertService.getAlerts()

    dispatch({
      type: ALERTS_REQUEST,
    })

    dispatch({
      type: ALERTS_LISTED,
      payload: { response },
    })
  }
}
