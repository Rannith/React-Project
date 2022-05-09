import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
    return(
        <>
            <h1><input type={'search'} placeholder="Search" /></h1>
            <nav className='secondaryNav'>
                <NavLink to="featured">Featured</NavLink>
                <NavLink to="new">New</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Product