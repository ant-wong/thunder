import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Pagination } from 'antd'

class Explore extends Component {

  // componentWillMount() {
  //   axios.get('http://localhost:6060/artists')
  //     .then((res) => {
  //       this.props.getAllUsers(res.data)
  //     })
  // }

  render() {
    return (
      <div>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    )
  }
}

export default withRouter(Explore)