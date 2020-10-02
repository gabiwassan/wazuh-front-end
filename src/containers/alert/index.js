import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchAlerts from '../../modules/alerts/fetchAlerts'
import {
  getAlerts,
  getAlertsError,
  getAlertsPending,
} from '../../modules/alerts/reducer'
import Index from '../../components/alertTable'
import CircularProgress from '@material-ui/core/CircularProgress'

const Alert = (props) => {
  useEffect(() => {
    props.fetchAlerts()
  }, [])

  return (
    <div>
      <h1>Alerts</h1>
      {/*<p>Alerts: {JSON.stringify(props.alerts)} </p>*/}
      {props.alerts.length > 0 ? (
        <Index alerts={props.alerts} />
      ) : (
        <CircularProgress disableShrink />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: getAlertsError(state),
  alerts: getAlerts(state),
  pending: getAlertsPending(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlerts,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
