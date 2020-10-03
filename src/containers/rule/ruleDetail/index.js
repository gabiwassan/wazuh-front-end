import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  getRuleById,
  getRuleByIdError,
  getRuleByIdPending,
} from '../../../modules/rules/reducer'
import { bindActionCreators } from 'redux'
import { fetchRuleById } from '../../../modules/rules/fetchRules'
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

const RuleDetail = (props) => {
  const history = useHistory()
  const ruleId = history.location.pathname.split('/').pop()
  const classes = useStyles()
  const { rule } = props

  useEffect(() => {
    props.fetchRuleById(ruleId)
  }, [])

  return (
    <div className="padding-content">
      {rule ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of Rule {rule.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Id: {rule.id}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Description: {rule.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Fired times: {rule.firedtimes}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              GDPR: {rule.gdpr}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              GPG13: {rule.gpg13}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Level: {rule.level}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Mail: {rule.mail ? rule.mail : 'Empty'}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              NIST 800 53: {rule.nist_800_53}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              PCI DSS: {rule.pci_dss}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Total alerts: {rule.total_alerts}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" href="/rules">
              Back
            </Button>
          </CardActions>
        </Card>
      ) : (
        <div className="loader">
          <CircularProgress disableShrink />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: getRuleByIdError(state),
  pending: getRuleByIdPending(state),
  rule: getRuleById(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRuleById,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(RuleDetail)
