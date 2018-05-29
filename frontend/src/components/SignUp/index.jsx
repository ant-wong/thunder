import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd'

const FormItem = Form.Item

class SignUp extends Component  {
  state = {
    confirmDirty: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      axios.post('http://localhost:6060/artists', {
        values
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Your passwords do not match.')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
 
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              { type: 'email', message: 'This is not a valid e-mail.' }, 
              { required: true, message: 'Please input an e-mail.' }
            ],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label={(
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: 'Please input a username.', whitespace: true }
            ],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Password">
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input a password.' }, 
              { validator: this.validateToNextPassword }
            ],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              { required: true, message: 'Please confirm your password!' }, 
              { validator: this.compareToFirstPassword }
            ],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          label={(
            <span>
              Title&nbsp;
              <Tooltip title="Producer, DJ, Songwriter, Drummer, Singer? You can put anything/multiple.">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}>
          {getFieldDecorator('title', {
            rules: [
              { required: true, message: 'Please input a title. What do you do?', whitespace: true }
            ],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label={(
            <span>
              Genre&nbsp;
              <Tooltip title="Hip-hop, Electro, Pop, Trap? You can put as many or as little as you'd like.">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}>
          {getFieldDecorator('genre', {
            rules: [
              { required: true, message: 'Please input a genre.', whitespace: true }
            ],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem >
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem >
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedSignUp = Form.create()(SignUp)

export default withRouter(WrappedSignUp)