import React from 'react'

/**
 * CarritoBotones.jsx
 *
 * Componente que muestra los botones de acción del carrito.
 *
 * - Incluye botones para vaciar el carrito, copiar el pedido e ir a Instagram, etc.
 * - Recibe las funciones de acción como props.
 * - Aplica estilos desde 'carrito.css'.
 *
 * Props:
 * - vaciarCarrito (function): Función para vaciar el carrito.
 * - copiarPedidoEIrAInstagram (function): Función para copiar el pedido y abrir Instagram.
 */

const CarritoBotones = ({vaciarCarrito, copiarPedidoEIrAInstagram}) => {
    return (
        <div className='carrito-botones'>
            <button className='boton amarillo' onClick={copiarPedidoEIrAInstagram} aria-label='Copiar pedido'>Copiar pedido</button>
            <button className='boton' onClick={() => vaciarCarrito()} aria-label='Vaciar carrito'>Vaciar carrito</button>
        </div>
    )
}

export default CarritoBotones