import React from 'react'
import logo from '../../assets/PegaYalogoweb.svg'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo PegaYa" />
            <h1>Catálogo</h1>
        </header>
    )
}

export default Header