import React from 'react'
import axios from 'axios'

class PersonList extends React.Component {

    constructor () {
        super()
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const persons = res.data
            this.setState({persons})
        })
    }

    render() {

        return (
            <ul>
                {
                    this.state.persons.map(person => {
                        return <li key={person.id} style={{listStyle:'none'}} >{person.name}</li>
                    })
                }
            </ul>
        )
    }
}

export default PersonList