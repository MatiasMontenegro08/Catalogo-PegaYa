/**
 * CarritoHeader.jsx
 *
 * Componente que muestra el encabezado del carrito.
 *
 * - Incluye el título y, opcionalmente, un subtítulo o ícono.
 * - Aplica estilos desde 'carrito.css'.
 *
 * No recibe props.
 */

import React from 'react'
import './carrito.css'

const CarritoHeader = () => {
    return (
        <div className="carrito-header">
            <h2>Mi Pedido</h2>
            <p>Copiar y enviar por chat de instagram.</p>
        </div>
    )
}

export default CarritoHeader