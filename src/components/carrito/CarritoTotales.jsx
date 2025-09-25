import React from 'react'
import './carrito.css';

/**
 * CarritoTotales.jsx
 *
 * Componente que muestra el resumen de totales del carrito.
 *
 * - Muestra la cantidad total de productos y el precio total.
 * - Recibe funciones como props para obtener los valores desde el contexto.
 * - Aplica estilos desde 'carrito.css'.
 *
 * Props:
 * - cantidadTotal (function): Función que retorna la cantidad total de productos en el carrito.
 * - precioTotal (function): Función que retorna el precio total del carrito.
 */

const CarritoTotales = ({cantidadTotal, precioTotal}) => {
    return (
        <div className="carrito-totales">
            <p>Cantidad total de stickers: {cantidadTotal()}</p>
            <p>Precio Total: $ {precioTotal()}</p>
        </div>
    )
}

export default CarritoTotales
