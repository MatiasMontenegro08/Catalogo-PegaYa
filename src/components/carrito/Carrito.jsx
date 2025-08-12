import React from 'react'
import './carrito.css'

const Carrito = ({stickers}) => {
    return (
        <div className='drawner'>
            <div className="carrito-header">
                <h2>Mi Pedido</h2>
                <p>Copiar y enviar por chat de instagram.</p>
            </div>
            <div className="carrito-items">
                <ul>
                    {stickers.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <p>Total: $ 100</p>
            <button className='btn-copiar'>Copiar pedido</button>
        </div>
    )
}

export default Carrito