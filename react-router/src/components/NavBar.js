import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='primaryNav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        </nav>
    )
}

export default NavBar