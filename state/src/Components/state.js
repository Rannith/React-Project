import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : 'This is Red'
        }
    }

    changeMessage () {
        if(this.state.message === 'This is Red'){
            this.setState({
                message : 'This is Blue'
            })
        }
        else {
            this.setState({
                message : 'This is Red'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change State</button>
            </div>
        )
    }
}

export default Message

