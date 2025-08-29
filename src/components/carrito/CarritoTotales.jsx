import React from 'react'

const CarritoTotales = ({precioTotal}) => {
    return (
        <div>
            <p>Total: $ {precioTotal()}</p>
        </div>
    )
}

export default CarritoTotales
