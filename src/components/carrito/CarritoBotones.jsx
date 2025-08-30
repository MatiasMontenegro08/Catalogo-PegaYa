import React from 'react'

const CarritoBotones = ({vaciarCarrito, copiarPedidoEIrAInstagram}) => {
    return (
        <div className='carrito-botones'>
            <button className='btn-copiar' onClick={copiarPedidoEIrAInstagram}>Copiar pedido</button>
            <button className='btn-copiar' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
        </div>
    )
}

export default CarritoBotones