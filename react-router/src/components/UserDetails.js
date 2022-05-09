import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

    const { userId } = useParams()

    return(
        <>
            <h4>Details about User {userId}</h4>
        </>
    )
}

export default UserDetails