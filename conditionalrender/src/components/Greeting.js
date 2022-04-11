import React, {Component} from 'react'

class Greeting extends Component {
    constructor () {
        super();

        this.state = {
            isLoggedIn : true
        }
    }

    render () {

        let message
        if(this.state.isLoggedIn){
            message = <h2>Welcome User</h2>
        }else{
            message = <h2>Welcome Guest</h2>
        }

        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Greeting