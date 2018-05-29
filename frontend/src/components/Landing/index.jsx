import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class Landing extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      axios.post('http://localhost:6060/login', {
        values
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Row>
        <Col span={8} offset={8}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username' }
                ],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your password' }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <Link to="/signup">
                <p className="login-form-forgot">Sign up</p>
              </Link>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}

const WrappedLogin = Form.create()(Landing)

export default withRouter(WrappedLogin)