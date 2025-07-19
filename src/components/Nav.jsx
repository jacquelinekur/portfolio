import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
    return (
        <nav className='navigation'>
            <h3 className='site-title'>Jacqueline Kurniawan</h3>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
