/**
 * CarritoItems.jsx
 *
 * Componente que muestra la lista de productos agregados al carrito.
 *
 * - Renderiza un ItemList por cada producto en el carrito.
 * - Recibe el array de productos como prop.
 * - Aplica estilos desde 'carrito.css'.
 *
 * Props:
 * - items (array): Array de productos en el carrito.
 */

import React from 'react'
import ItemList from './ItemList'

const CarritoItems = ({ carrito, cambiarCantidad, borrarSticker }) => {

    return (
        <div className="carrito-items">
            <ul>
                {carrito.map((sticker) => (
                    <li key={sticker.id}>
                        <ItemList
                            item={sticker}
                            cantidad={sticker.cantidad}
                            aumentarCantidad={() => cambiarCantidad(sticker.id, sticker.cantidad + 1)}
                            disminuirCantidad={() => cambiarCantidad(sticker.id, sticker.cantidad - 1)}
                            onBorrar={() => borrarSticker(sticker.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CarritoItems