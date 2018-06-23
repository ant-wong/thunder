import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/theme.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import Success from './components/Success'
import Explore from './components/Explore'
// import Update from './components/Update'
import NotFound  from './components/NotFound'
// import Footer from './components/Footer'

class App extends Component {

  componentWillMount() {
    this.props.getAllUsers()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar {...this.props}/>
        <Switch>

          <Route exact path="/" render={() => {
            return <Landing {...this.props} />
          }} />
          <Route path="/signup" render={() => {
            return <SignUp {...this.props} />
          }} />
          <Route path="/success" component={Success} />
          {/* TEST ROUTE */}
          {/* <Route path="/update" render={() => {
            return <Update />
          }} /> */}
          <Route path="/artist/:id" render={() => {
            return <Profile {...this.props}/>
          }} />
          <Route path="/explore" render={() => {
            return <Explore {...this.props} />
          }} />

          {/* 404 PAGE */}
          <Route path="*" component={NotFound} />

        </Switch>
        {/* FOOTER IS BEING DUMB */}
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
