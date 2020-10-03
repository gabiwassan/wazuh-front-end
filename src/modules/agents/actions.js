import {
  AGENT_BY_ID_ERROR,
  AGENT_BY_ID_REQUEST,
  AGENT_BY_ID_SUCCESS,
  AGENTS_ERROR,
  AGENTS_REQUEST,
  AGENTS_SUCCESS,
} from './types'

export const fetchAgentsPending = () => {
  return {
    type: AGENTS_REQUEST,
  }
}

export const fetchAgentsSuccess = (agents) => {
  return {
    type: AGENTS_SUCCESS,
    agents: agents.data,
  }
}

export const fetchAgentsError = (error) => {
  return {
    type: AGENTS_ERROR,
    error: error,
  }
}

export const fetchAgentByIdPending = () => {
  return {
    type: AGENT_BY_ID_REQUEST,
  }
}

export const fetchAgentByIdSuccess = (agent) => {
  return {
    type: AGENT_BY_ID_SUCCESS,
    agent: agent,
  }
}

export const fetchAgentByIdError = (error) => {
  return {
    type: AGENT_BY_ID_ERROR,
    error: error,
  }
}

export default {
  fetchAgentsPending,
  fetchAgentsSuccess,
  fetchAgentsError,
  fetchAgentByIdError,
  fetchAgentByIdPending,
  fetchAgentByIdSuccess,
}
