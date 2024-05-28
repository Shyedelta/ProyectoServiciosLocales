import React from 'react'
import { Link } from 'react-router-dom'

function NavbarButton({ route, name }) {
    return (
        <li className='border-b-transparent border-b-2 hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em] px-3'>
            <Link to={route} >
                <p className='text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center rounded'>
                    {name}
                </p>
            </Link> 
        </li>
    )
}

export default NavbarButton