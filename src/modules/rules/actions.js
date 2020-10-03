import {
  RULE_BY_ID_ERROR,
  RULE_BY_ID_REQUEST,
  RULE_BY_ID_SUCCESS,
  RULES_ERROR,
  RULES_REQUEST,
  RULES_SUCCESS,
} from './types'

export const fetchRulesPending = () => {
  return {
    type: RULES_REQUEST,
  }
}

export const fetchRulesSuccess = (rules) => {
  return {
    type: RULES_SUCCESS,
    rules: rules.data,
  }
}

export const fetchRulesError = (error) => {
  return {
    type: RULES_ERROR,
    error: error,
  }
}

export const fetchRuleByIdPending = () => {
  return {
    type: RULE_BY_ID_REQUEST,
  }
}

export const fetchRuleByIdSuccess = (rule) => {
  return {
    type: RULE_BY_ID_SUCCESS,
    rule: rule,
  }
}

export const fetchRuleByIdError = (error) => {
  return {
    type: RULE_BY_ID_ERROR,
    error: error,
  }
}

export default {
  fetchRulesPending,
  fetchRulesSuccess,
  fetchRulesError,
  fetchRuleByIdError,
  fetchRuleByIdPending,
  fetchRuleByIdSuccess,
}
