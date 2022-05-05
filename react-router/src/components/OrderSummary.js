import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {

    const navigate = useNavigate()
    
    const navigateTo = () => navigate(-1)

  return (
    <div>
      <h1>Order Placed</h1>
      <button onClick={navigateTo} >Go Back</button>
    </div>
  )
}

export default OrderSummary
