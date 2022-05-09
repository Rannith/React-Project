import React from 'react'
import { Link } from 'react-router-dom'

function Heading() {
  return (
    <div className='homeContainer'>
      <h1>MY PRODUCT LIST</h1>
      <Link to='/addproduct' className='btn btn-primary' >Add Product</Link>
    </div>
  )
}

export default Heading
