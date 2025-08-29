import React from 'react'

const CarritoItems = ({carrito}) => {
    return (
        <div className="carrito-items">
            <ul>
                {carrito.map((sticker) => (
                    <li key={sticker.id}>{sticker.titulo}</li>
                ))}
            </ul>
        </div>
    )
}

export default CarritoItems