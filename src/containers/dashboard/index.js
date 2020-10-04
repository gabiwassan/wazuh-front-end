import React, { useEffect } from 'react'
import 'zingchart/es6'
import ZingChart from 'zingchart-react'
import {
  getAgents,
  getAgentsError,
  getAgentsPending,
} from '../../modules/agents/reducer'
import { bindActionCreators } from 'redux'
import fetchAgents from '../../modules/agents/fetchAgents'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

const Dashboard = (props) => {
  useEffect(() => {
    props.fetchAgents()
  }, [])

  const totalAlerts = props.agents.map((agent) => {
    return { values: [agent.total_alerts], text: agent.name }
  })
  debugger
  const myConfig = {
    legend: {},
    type: 'bar3d',
    series: totalAlerts,
  }

  return (
    <>
      {!props.pending ? (
        <div className="padding-content">
          <h2>Total alert by Agent</h2>
          <ZingChart data={myConfig} />
        </div>
      ) : (
        <div className="loader">
          <CircularProgress disableShrink />
        </div>
      )}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
