import { combineReducers } from 'redux'
import alert from './alerts/reducer'
import agent from './agents/reducer'
import rule from './rules/reducer'

export default combineReducers({
  alert,
  agent,
  rule,
})
