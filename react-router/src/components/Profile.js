import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication'

function Profile() {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return(
        <>
            <h1>Welcome {auth.user}, this is your profile</h1>
            <button onClick={handleLogout} >Logout</button>
        </>
    )
}

export default Profile