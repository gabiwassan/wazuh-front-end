import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter'
import { getAlerts } from '../../modules/alerts/actions'

const Alert = (props) => {
  useEffect(() => {
    console.log('useEffect')

    props.getAlerts()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {props.count}</p>
      <p>Alerts: {JSON.stringify(props.alertList)} </p>

      <p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </button>
      </p>

      <p>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </button>
      </p>

      <p>
        <button onClick={() => props.changePage()}>
          Go to about page via redux
        </button>
      </p>
    </div>
  )
}

const mapStateToProps = ({ counter, alert }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  alertList: alert,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/agents'),
      getAlerts,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
