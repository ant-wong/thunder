import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Row, Col, Button } from 'antd'

export default class Navbar extends Component {

  logOut = () => {
    axios.put(`http://localhost:6060/artists/${this.props.users.id}`, {
      values: this.props.users,
      logged_in: false
    })
    .then((res) => {
      // console.log(res)
      this.props.editUser(res)
    })
  }

  render() {
    console.log(this.props)
    return (
      <nav className="thunderNav">
        {this.props.users.logged_in ? 
          <Row>
            <Col span={12}>
              <Link to="/explore">
                <h1>thunder.</h1>
              </Link>
            </Col>
            <Col span={12}>
              <Link to="/">
                <Button 
                  type="primary" 
                  className="signup-button"
                  onClick={this.logOut}>
                  LOG OUT
                </Button>
              </Link>
            </Col>
          </Row>
          :
          <Row>
            <Col span={12}>
              <Link to="/">
                <h1>thunder.</h1>
              </Link>
            </Col>
            <Col span={12}>
              <Link to="/signup">
                <Button 
                  type="primary" 
                  className="signup-button">
                  SIGN UP
                </Button>
              </Link>
            </Col>
          </Row>
        }
      </nav>
    )
  }
}