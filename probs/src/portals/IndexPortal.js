import React, { Component } from 'react'
import PortalDemo from './PortalDemo'

class IndexPortal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModel : false
    }
  }
  

  showModel = () => {
    this.setState({
        showModel : true
    })
}

  close = () => {
      this.setState({
          showModel : false
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.showModel}>Open </button>
        {
          this.state.showModel && 
          <PortalDemo close={this.close} >
            Testing Portal
          </PortalDemo>
        }
      </div>
    )
  }
}

export default IndexPortal
