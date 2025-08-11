import React from 'react'
import Modal from '../modal/Modal'
import './carrito.css'

const Carrito = () => {
    return (
        <div className='container-carrito'>
            <div className="carrito-header">
                <h2>Mi Pedido</h2>
                <p>Copiar y enviar por chat de instagram.</p>
            </div>
            <div className="carrito-items">
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
                <p>Lista de stickers seleccionados</p>
            </div>
            <button className='btn-copiar'>boton de copiado</button>
        </div>
    )
}

export default Carrito