import React, { Component } from "react";
// import axios from "axios";
import Api from "./Api";

class PersonRemove extends Component {

    constructor() {
        super()
        this.state = {
            id: ''
        }
    }

    handleChange = event => {
        this.setState({
            id: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        Api.delete(`users/${this.state.id}`).then(res => {
            console.log(res);
            console.log(res.data)
        })
    }

    render() {
        return (
            <form>
                <label>
                    Person Id:
                    <input type={'number'} name='id' placeholder="Enter id" onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Delete</button>
            </form>
        )
    }
}

export default PersonRemove