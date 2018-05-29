import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './styles/theme.css'
import Landing from './components/Landing'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Link to="/">
          <h1>thunder.</h1>
        </Link>
        <Switch>
          <Route exact path="/" render={() => {
            return <Landing />
          }} />
          <Route path="/signup" render={() => {
            return <SignUp />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App
