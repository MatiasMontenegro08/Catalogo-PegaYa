import React from 'react'

const CarritoBotones = ({vaciarCarrito, copiarPedidoEIrAInstagram}) => {
    return (
        <div className='carrito-botones'>
            <button className='boton amarillo' onClick={copiarPedidoEIrAInstagram} aria-label='Copiar pedido'>Copiar pedido</button>
            <button className='boton' onClick={() => vaciarCarrito()} aria-label='Vaciar carrito'>Vaciar carrito</button>
        </div>
    )
}

export default CarritoBotones