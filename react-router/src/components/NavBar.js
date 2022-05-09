import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authentication'

function NavBar() {

    const auth = useAuth()

    return (
        <nav className='primaryNav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {
                !auth.user && <NavLink to='/login'>Login</NavLink>
            }
        </nav>
    )
}

export default NavBar