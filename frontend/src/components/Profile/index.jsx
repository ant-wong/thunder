import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Profile extends Component {
  componentDidMount() {
    axios.get(`http://localhost:6060/artists/${this.props.match.params.id}`)
      .then((res) => {
        this.props.getOneUser(res.data[0])
      })
  }

  render() {
    console.log(this.props)
    return (
      <div onClick={this.testGet}>
       <h1>{this.props.users.title}</h1>
       <br/>
       <h2>{this.props.users.genre}</h2>
      </div>
    )
  }
}

export default withRouter(Profile)