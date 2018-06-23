import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'

class Profile extends Component {
  componentWillMount() {
    this.props.getAllUsers()
  }

  render() {
    console.log(this.props)
    return (
      <div>
       <h1>{this.props.users.title}</h1>
       <br/>
       <h2>{this.props.users.genre}</h2>
      </div>
    )
  }
}

export default withRouter(Profile)