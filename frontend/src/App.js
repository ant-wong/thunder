import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './styles/theme.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import Update from './components/Update'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => {
            return <Landing />
          }} />
          <Route path="/signup" render={() => {
            return <SignUp />
          }} />
          <Route path="/update" render={() => {
            return <Update />
          }} />
          <Route path="/:id" render={() => {
            return <Profile />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App
