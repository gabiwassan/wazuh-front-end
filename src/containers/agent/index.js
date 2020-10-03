import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchAgents from '../../modules/agents/fetchAgents'
import {
  getAgents,
  getAgentsError,
  getAgentsPending,
} from '../../modules/agents/reducer'
import AgentTable from '../../components/agentTable'
import CircularProgress from '@material-ui/core/CircularProgress'

const Agent = (props) => {
  useEffect(() => {
    props.fetchAgents()
  }, [])

  return (
    <div className="padding-content">
      <h1>Agents</h1>
      {props.agents.length > 0 ? (
        <AgentTable agents={props.agents} />
      ) : (
        <div className="loader">
          <CircularProgress disableShrink />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  agents: getAgents(state),
  pending: getAgentsPending(state),
  error: getAgentsError(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAgents,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Agent)
