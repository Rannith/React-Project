import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <nav className='primaryNav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addproduct'>Add Product</NavLink>
            <NavLink to='/editproduct'>Edit Product</NavLink>
        </nav>
    )
}

export default NavBar