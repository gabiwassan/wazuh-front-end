import React from 'react'
import { Route } from 'react-router-dom'
import Alert from '../alert'
import Agent from '../agent'
import AlertDetail from '../alert/alertDetail'
import NavBar from '../navBar'
import Rule from '../rule'
import Dashboard from '../dashboard'
import AgentDetail from '../agent/agentDetail'

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <main>
      <Route exact path="/" component={Alert} />
      <Route exact path="/alert/:id" component={AlertDetail} />
      <Route exact path="/agents" component={Agent} />
      <Route exact path="/agent/:id" component={AgentDetail} />
      <Route exact path="/rules" component={Rule} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
