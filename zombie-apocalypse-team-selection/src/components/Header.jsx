import logo from '../logo.svg';
import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className='my-header'>
            <h1>Zombie Apocalypse Team Selection</h1>
            <img src={logo} className="app-logo" alt="logo" />
        </header>
    )
}

export default Header
