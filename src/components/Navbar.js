import React, { Component } from 'react'
import logo from '../img/leaf.svg';
import '../styles/Navbar.css';

class Navbar extends Component {
    changeNavColor = (color, display) => {
        document.getElementById('nav-bar').style.backgroundColor = color;
        document.getElementById('nav-bar').style.transition = '1.5s';
        document.getElementById('homepage-link').style.display = display;
    }

    componentDidMount() {
        window.onscroll = () => {
            (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ?
            this.changeNavColor('black', 'flex') : this.changeNavColor('transparent', 'none')
        }
    }

    render() {
        return (
            <nav id='nav-bar'>
                <div className='navbar-logo'>
                    <a id='homepage-link' href='http://localhost:3000/#' alt='Link to Homepage'>
                        <img id='logo' src={logo} alt='Leaf Icon' />
                        <h1 id='logo-text'>POALES</h1>
                    </a>
                </div>
                <a className='navbar-link' href='#about'>The Project</a>
                <a className='navbar-link' href='http://localhost:3000/#'>Services</a>
                <a className='navbar-link' href='http://localhost:3000/#'>Team</a>
                <a className='navbar-link' href='http://localhost:3000/#'>Partners</a>
            </nav>
        )
    }
}

export default Navbar;