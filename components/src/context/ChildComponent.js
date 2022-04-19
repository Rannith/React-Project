import React, { Component } from 'react'
import { UserConsumer } from './userComponent'

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                (username) => <div>Welcome {username}</div>
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ChildComponent
