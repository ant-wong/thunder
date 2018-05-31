import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Button } from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="thunderNav">
        <Row>
          <Col span={12}>
            <Link to="/">
              <h1>thunder.</h1>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="/signup">
              <Button type="primary" className="signup-button">SIGN UP</Button>
            </Link>
          </Col>
        </Row>
      </nav>
    )
  }
}