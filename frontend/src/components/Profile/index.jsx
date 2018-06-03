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
    return (
      <div onClick={this.testGet}>
        THIS IS MY PROFILE
      </div>
    )
  }
}

export default withRouter(Profile)