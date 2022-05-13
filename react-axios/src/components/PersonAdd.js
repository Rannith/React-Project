import React from "react";
import axios from "axios";

class PersonAdd extends React.Component {

    constructor() {
        super()
        this.state = {
            name:''
        }
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    render() {
        return (
            <form>
                <label>
                    Person Name:
                    <input type={'text'} name='name' placeholder="Enter Name" onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default PersonAdd