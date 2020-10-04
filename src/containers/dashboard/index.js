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
import fetchRules from '../../modules/rules/fetchRules'
import {
  getRules,
  getRulesError,
  getRulesPending,
} from '../../modules/rules/reducer'

const Dashboard = (props) => {
  useEffect(() => {
    props.fetchAgents()
    props.fetchRules()
  }, [])

  const totalAlertsByAgent = props.agents.map((agent) => {
    return { values: [agent.total_alerts], text: agent.name }
  })

  const totalAlertsByRule = props.rules.map((agent) => {
    return { values: [agent.total_alerts], text: agent.description }
  })

  const configBar = {
    legend: {
      draggable: true,
      'drag-handler': 'icon',
      icon: {
        'line-color': 'red',
      },
      header: {
        'background-color': '#ffe6e6',
        'border-left': '1px solid red',
        'border-right': '1px solid red',
        'border-top': '1px solid red',
        'border-bottom': '1px solid red',
      },
      x: '10%',
      y: '10%',
    },
    type: 'bar3d',
  }

  const configAgents = {
    title: {
      text: 'Total Alerts by Agent',
    },
    ...configBar,
    series: totalAlertsByAgent,
  }

  const configRules = {
    title: {
      text: 'Total Alerts by Rule',
    },
    ...configBar,
    series: totalAlertsByRule,
  }

  const showLoader = () => {
    return (
      <div className="loader">
        <CircularProgress disableShrink />
      </div>
    )
  }

  return (
    <>
      {!props.agentPending ? (
        <div className="padding-dashboard">
          <ZingChart data={configAgents} />
        </div>
      ) : (
        showLoader()
      )}

      <br />

      {!props.rulePending ? (
        <div className="padding-dashboard">
          <ZingChart data={configRules} />
        </div>
      ) : (
        showLoader()
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  agents: getAgents(state),
  agentPending: getAgentsPending(state),
  agentError: getAgentsError(state),
  rules: getRules(state),
  rulePending: getRulesPending(state),
  ruleError: getRulesError(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAgents,
      fetchRules,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
