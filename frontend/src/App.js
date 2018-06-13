import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import './styles/theme.css'
import Navbar from './components/Navbar'
import UserNav from './components/UserNav'
import Landing from './components/Landing'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Update from './components/Update'
import NotFound  from './components/NotFound'
// import Footer from './components/Footer'

class App extends Component {

  componentWillMount() {
    axios.get('http://localhost:6060/artists')
      .then((res) => {
        this.props.getAllUsers(res.data)
      })
  }

  render() {
    // console.log(this.props)
    // console.log(this.state)
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
          {/* TEST ROUTE */}
          <Route path="/update" render={() => {
            return <Update />
          }} />
          <Route path="/artist/:id" render={() => {
            return <Profile {...this.props}/>
          }} />
          <Route path="/explore" render={() => {
            return <Explore {...this.props} />
          }} />
          <Route path="*" component={NotFound} />
        </Switch>
        {/* FOOTER IS BEING DUMB */}
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
