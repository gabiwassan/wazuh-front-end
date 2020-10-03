import {
  RULE_BY_ID_ERROR,
  RULE_BY_ID_REQUEST,
  RULE_BY_ID_SUCCESS,
  RULES_ERROR,
  RULES_REQUEST,
  RULES_SUCCESS,
} from './types'

const initialState = {
  pending: false,
  rules: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RULES_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case RULES_SUCCESS:
      return {
        ...state,
        pending: false,
        rules: action.rules,
      }
    case RULES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    case RULE_BY_ID_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case RULE_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        rule: action.rule,
      }
    case RULE_BY_ID_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }

    default:
      return state
  }
}

export const getRules = (state) => state.rule.rules
export const getRulesPending = (state) => state.rule.pending
export const getRulesError = (state) => state.rule.error

export const getRuleById = (state) => state.rule.rule
export const getRuleByIdPending = (state) => state.rule.pending
export const getRuleByIdError = (state) => state.rule.error
