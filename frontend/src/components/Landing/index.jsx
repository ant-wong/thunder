import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
      <div>
        <h1>welcome.</h1>
        <Row>
          <Col span={10} offset={7}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username' }
                  ],
                })(
                  <Input prefix={ 
                    <Icon type="user" style={{ color: '#EC407A' }} />
                  } placeholder="Username" className="login-input"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your password' }
                  ],
                })(
                  <Input prefix={
                    <Icon type="lock" style={{ color: '#EC407A' }} />
                  } type="password" placeholder="Password" className="login-input"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'unchecked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  LOG IN
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrappedLogin = Form.create()(Landing)

export default withRouter(WrappedLogin)