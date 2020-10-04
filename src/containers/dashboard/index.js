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
  const myConfig = {
    title: {
      text: "Total Alerts by Agent",
    },
    legend: {
      'draggable': true,
      'drag-handler': "icon",
      'icon': {
        'line-color': "red"
      },
      header: {
        'background-color': "#ffe6e6",
        'border-left': "1px solid red",
        'border-right': "1px solid red",
        'border-top': "1px solid red",
        'border-bottom': "1px solid red"
      },
      x: "10%",
      y: "10%"
    },
    type: 'bar3d',
    series: totalAlerts,
  }

  return (
    <>
      {!props.pending ? (
        <div className="padding-dashboard">
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
