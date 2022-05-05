import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const navigateTo = () => navigate('order-summary')

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={navigateTo} >Place Order</button>
        </>
    )
}

export default Home