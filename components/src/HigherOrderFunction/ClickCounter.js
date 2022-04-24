import React, { Component } from 'react'
import CounterFunction from './CounterFunction'

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount} >Click {this.props.count} times</button>
      </div>
    )
  }
}

export default CounterFunction(ClickCounter)
