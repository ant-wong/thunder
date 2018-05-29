import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="thunderNav">
        <Row>
          <Col span={6}>
            <Link to="/">
              <h1>thunder.</h1>
            </Link>
          </Col>
        </Row>
      </nav>
    )
  }
}