import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../alert'
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
      <Route exact path="/" component={Home} />
      <Route exact path="/agents" component={Agent} />
      <Route exact path="/rules" component={Rule} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
