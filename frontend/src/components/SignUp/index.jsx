import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Form, Input, Tooltip, Icon, Checkbox, Button, Upload, message, Row, Col } from 'antd'

import lightning from '../../styles/img/lightning.svg'

const FormItem = Form.Item

class SignUp extends Component  {
  state = {
    confirmDirty: false,
    loading: false
  }

  // SUBMIT FORM
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      axios.post('http://localhost:6060/artists', {
        values,
      })
        .then((res) => {
          this.props.addUser(res.data[0])
        })
        .catch((error) => {
          console.log(error)
        })
      if (!err) {
        this.props.history.push("/success")
      }
    })
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  // COMPARE PASSWORDS
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Your passwords do not match.')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  // IMAGE UPLOAD
  getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg'
    if (!isJPG) {
      message.error('You can only upload JPG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJPG && isLt2M
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }))
    }
  }
 
  render() {
    const { getFieldDecorator } = this.props.form
    const imageUrl = this.state.imageUrl

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    return (
      <Row className="signup-body">
        <Col span={12} offset={2}>
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
            <FormItem
              label={(
                <span>
                  Profile Picture&nbsp;
                  <Tooltip title="Please input a link to a hosted image. Upload currently not working.">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              )}>
              {getFieldDecorator('pic', {
                rules: [
                  { required: false, message: 'Please provide a link.', whitespace: true }
                ],
              })(
                <Input />
              )}
            </FormItem>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="//jsonplaceholder.typicode.com/posts/"
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}>
              {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
            <FormItem >
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
            </FormItem>
            <FormItem >
              <Button type="primary" htmlType="submit" className="register-button">Register</Button>
            </FormItem>
          </Form>
        </Col>
        <Col span={10}>
          <img src={lightning} alt="Sign Up" className="signup-image"/>
        </Col>
      </Row>
    )
  }
}

const WrappedSignUp = Form.create()(SignUp)

export default withRouter(WrappedSignUp)