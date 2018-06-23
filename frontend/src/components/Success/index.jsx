import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Success extends Component {
  render() {
    return (
      <div>
        <h1>thanks for signing up</h1>
      </div>
    )
  }
}

export default withRouter(Success)