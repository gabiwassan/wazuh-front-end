import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  getAgentById,
  getAgentByIdError,
  getAgentByIdPending,
} from '../../modules/agents/reducer'
import { bindActionCreators } from 'redux'
import { fetchAgentById } from '../../modules/agents/fetchAgents'
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

const AgentDetail = (props) => {
  const history = useHistory()
  const agentId = history.location.pathname.split('/').pop()
  const classes = useStyles()
  const { agent } = props

  useEffect(() => {
    props.fetchAgentById(agentId)
  }, [])

  return (
    <div>
      {agent ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of Agent {agentId}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Id: {agent.id}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Name: {agent.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Ip: {agent.ip}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Total alerts: {agent.total_alerts}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" href="/agents">
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
  error: getAgentByIdError(state),
  pending: getAgentByIdPending(state),
  agent: getAgentById(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAgentById,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AgentDetail)
