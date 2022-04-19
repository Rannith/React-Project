import React, { Component } from 'react'
import ParentComponent from './ParentComponent'

class GrandParentComponent extends Component {
  render() {
    return (
      <div>
        <ParentComponent></ParentComponent>
      </div>
    )
  }
}

export default GrandParentComponent
