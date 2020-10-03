import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  getAlertById,
  getAlertByIdError,
  getAlertByIdPending,
} from '../../../modules/alerts/reducer'
import { bindActionCreators } from 'redux'
import { fetchAlertById } from '../../../modules/alerts/fetchAlerts'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const AlertDetail = (props) => {
  const history = useHistory()
  const alertId = history.location.pathname.split('/').pop()
  const classes = useStyles()
  const { alert } = props

  useEffect(() => {
    props.fetchAlertById(alertId)
  }, [])

  return (
    <div>
      {alert ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of Alert {alertId}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Index: {alert._index}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Score: {alert._score}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Type: {alert._type}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Agent name: {alert._source.agent.name} - Id:{' '}
              {alert._source.agent.id}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Cluster: {alert._source.cluster.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Manager: {alert._source.manager.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Rule: {alert._source.rule.description} - Id:{' '}
              {alert._source.rule.id}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" href="/">
              Back
            </Button>
          </CardActions>
        </Card>
      ) : (
        <CircularProgress disableShrink />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: getAlertByIdError(state),
  pending: getAlertByIdPending(state),
  alert: getAlertById(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlertById,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AlertDetail)
