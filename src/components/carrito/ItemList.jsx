import React, { useState } from 'react'

const ItemList = ({ item, cantidad, aumentarCantidad, disminuirCantidad, onBorrar }) => (
    <div className='item-list'>
        <div>
            <p>{item.titulo}</p>
        </div>
        <div className='item-list-btn'>
            <div className="btn-cantidades">
                {cantidad > 1 && <button onClick={disminuirCantidad}>-</button>}
                <p className='p-cantidad'>{cantidad}</p>
                <button onClick={aumentarCantidad}>+</button>
            </div>
            <div>
                <button className='btn-borrar' onClick={onBorrar}>X</button>
            </div>
        </div>
    </div>
);

export default ItemList