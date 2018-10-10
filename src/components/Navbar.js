import React from 'react'
import logo from '../img/leaf.svg';
import '../styles/Navbar.css';

const Navbar = () => (
    <nav className='nav-bar'>
        <div className='navbar-logo'>
            <a id='homepage-link' href='http://localhost:3000/#' alt='Link to Homepage'>
                <img id='logo' src={logo} alt='Leaf Icon' />
                <h1 id='logo-text'>POALES</h1>
            </a>
        </div>
        <a className='navbar-link' href='http://localhost:3000/#'>The Project</a>
        <a className='navbar-link' href='http://localhost:3000/#'>Team</a>
        <a className='navbar-link' href='http://localhost:3000/#'>Partners</a>
    </nav>
)

export default Navbar;