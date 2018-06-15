import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Pagination, Row, Col, Card, Icon, Avatar } from 'antd'

const { Meta } = Card

class Explore extends Component {

  componentWillMount() {
    axios.get('http://localhost:6060/artists')
      .then((res) => {
        console.log(res.data)
        this.props.getAllUsers(res.data)
      })
  }

  render() {
    console.log(this.props)
    const usersJSX =  this.props.users.map((user, i) => {
      return <Col span={6}>
               <Card
                 key={i}
                 style={{ width: 250 }}
                 cover={<img alt="avatar" src={user.profilepic} />}
                 actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
                 <Meta
                   avatar={<Avatar src={user.profilepic} />}
                   title={user.title}
                   description={user.genre} />
               </Card>
             </Col>
    })

    return (
      <div>
        <Row>
          {usersJSX}
        </Row>
        <Row>
          <Pagination defaultCurrent={6} total={500} />
        </Row>
      </div>
    )
  }
}

export default withRouter(Explore)