import React from 'react'
import logo from '../../assets/PegaYalogoweb.svg'
import './header.css';

/**
 * Header.jsx
 *
 * Componente de cabecera de la aplicación.
 * Muestra el logo y el título principal del catálogo.
 * No recibe props.
 */

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo PegaYa" />
            <h1>Catálogo</h1>
        </header>
    )
}

export default Header