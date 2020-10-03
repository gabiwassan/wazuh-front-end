import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const NavBar = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const history = useHistory()
  const handleOnClick = useCallback((path) => history.push(path), [history])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <a href="https://wazuh.com">
        <img
          className="logo"
          src="https://wazuh.com/wp-content/themes/wazuh/assets/images/wazuh_logo.svg"
        />
      </a>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Alerts" onClick={() => handleOnClick('/')} />
          <Tab label="Agents" onClick={() => handleOnClick('/agents')} />
          <Tab label="Rules" onClick={() => handleOnClick('/rules')} />
          <Tab label="Dashboard" onClick={() => handleOnClick('/dashboard')} />
        </Tabs>
      </Paper>
    </>
  )
}

export default NavBar
