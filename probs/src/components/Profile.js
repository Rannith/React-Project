import React from 'react'

const Profile = (probs) => {
    return (
        <div>
            <h1>Name : {probs.name}</h1>
            <h1>Team : {probs.team}</h1>
            <h4>Description</h4>
            {probs.children}
        </div>
    )
}

export default Profile