import { combineReducers } from 'redux'
import counter from './counter'
import alert from './alerts/actions'

export default combineReducers({
  counter,
  alert,
})
