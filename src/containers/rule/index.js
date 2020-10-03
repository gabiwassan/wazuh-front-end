import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchRules from '../../modules/rules/fetchRules'
import {
  getRules,
  getRulesError,
  getRulesPending,
} from '../../modules/rules/reducer'
import RuleTable from '../../components/ruleTable'
import CircularProgress from '@material-ui/core/CircularProgress'

const Rule = (props) => {
  useEffect(() => {
    props.fetchRules()
  }, [])

  return (
    <div className="padding-content">
      <h1>Rules</h1>
      {props.rules.length > 0 ? (
        <RuleTable rules={props.rules} />
      ) : (
        <div className="loader">
          <CircularProgress disableShrink />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  rules: getRules(state),
  pending: getRulesPending(state),
  error: getRulesError(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRules,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
