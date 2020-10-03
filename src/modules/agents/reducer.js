import {
  AGENT_BY_ID_ERROR,
  AGENT_BY_ID_REQUEST,
  AGENT_BY_ID_SUCCESS,
  AGENTS_ERROR,
  AGENTS_REQUEST,
  AGENTS_SUCCESS,
} from './types'

const initialState = {
  pending: false,
  agents: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AGENTS_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case AGENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        agents: action.agents,
      }
    case AGENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    case AGENT_BY_ID_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case AGENT_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        agent: action.agent,
      }
    case AGENT_BY_ID_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }

    default:
      return state
  }
}

export const getAgents = (state) => state.agent.agents
export const getAgentsPending = (state) => state.agent.pending
export const getAgentsError = (state) => state.agent.error

export const getAgentById = (state) => state.agent.agent
export const getAgentByIdPending = (state) => state.agent.pending
export const getAgentByIdError = (state) => state.agent.error
