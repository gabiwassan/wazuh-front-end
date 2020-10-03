import { combineReducers } from 'redux'
import alert from './alerts/reducer'
import agent from './agents/reducer'

export default combineReducers({
  alert,
  agent,
})
