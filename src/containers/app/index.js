import React from 'react'
import { Route } from 'react-router-dom'
import Alert from '../alert'
import Agent from '../agent'
import NavBar from '../navBar'
import Rule from '../rule'
import Dashboard from '../dashboard'

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <main>
      <Route exact path="/" component={Alert} />
      <Route exact path="/agents" component={Agent} />
      <Route exact path="/rules" component={Rule} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
