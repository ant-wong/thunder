import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { Form, Input, Tooltip, Icon, Button } from 'antd'
const FormItem = Form.Item

class Update extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      axios.put('http://localhost:6060/artists/2', {
        values
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleDelete = (e) => {
    e.preventDefault()
    axios.delete('http://localhost:6060/artists/7', {
      test: 'test'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div>
        <h1>MOCK UPDATE AND DELETE</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'This is not a valid e-mail.' },
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
                { required: false, message: 'Please input a username.', whitespace: true }
              ],
            })(
              <Input />
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
                { required: false, message: 'Please input a title. What do you do?', whitespace: true }
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
                { required: false, message: 'Please input a genre.', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem >
            <Button type="primary" htmlType="submit">Update</Button>
          </FormItem>
        </Form>

        <Button type="danger" onClick={this.handleDelete}>DELETE</Button>
      </div>
    )
  }
}

const WrappedUpdate = Form.create()(Update)

export default withRouter(WrappedUpdate)