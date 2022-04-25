import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {

    constructor(props) {
      super(props)
    }
    

    render() {
        return ReactDOM.createPortal (
        <div className='model'>
            {this.props.children}       
            <button onClick={this.props.close}>Close</button>
        </div>,
        document.getElementById('model-root')
        )
    }
}

export default PortalDemo
