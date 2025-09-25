import React, { useState } from 'react'

/**
 * ItemList.jsx
 *
 * Componente que muestra la información y controles de cantidad para un producto del carrito.
 *
 * - Muestra el nombre, cantidad, precio y botones para aumentar/disminuir cantidad o eliminar el producto.
 * - Recibe funciones de manejo de cantidad y eliminación como props.
 * - Aplica estilos desde 'carrito.css'.
 *
 * Props:
 * - item (object): Producto del carrito.
 * - cantidad (number): Cantidad actual del producto.
 * - aumentarCantidad (function): Función para aumentar la cantidad.
 * - disminuirCantidad (function): Función para disminuir la cantidad.
 * - onBorrar (function): Función para eliminar el producto del carrito.
 */

const ItemList = ({ item, cantidad, aumentarCantidad, disminuirCantidad, onBorrar }) => (
    <div className='item-list'>
        <div>
            <p>{item.titulo}</p>
        </div>
        <div className='item-list-btn'>
            <div className="btn-cantidades">
                {cantidad > 1 && <button onClick={disminuirCantidad} aria-label='Disminuir cantidad'>-</button>}
                <p className='p-cantidad'>{cantidad}</p>
                <button onClick={aumentarCantidad} aria-label='Aumentar cantidad'>+</button>
            </div>
            <div>
                <button className='btn-borrar' onClick={onBorrar} aria-label='Borrar sticker'>X</button>
            </div>
        </div>
    </div>
);

export default ItemList