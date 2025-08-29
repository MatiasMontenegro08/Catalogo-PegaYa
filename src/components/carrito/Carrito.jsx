import React, {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CarritoHeader from './CarritoHeader';
import CarritoItems from './CarritoItems';
import CarritoTotales from './CarritoTotales';
import CarritoBotones from './CarritoBotones';
import './carrito.css'

const Carrito = () => {
    const { carrito, borrarSticker, vaciarCarrito, cantidadTotal, precioTotal } = useContext(CartContext);
    return (
        <div className='drawner'>
            <CarritoHeader />
            <CarritoItems carrito={carrito} />
            <CarritoTotales precioTotal={precioTotal} />
            <CarritoBotones vaciarCarrito={vaciarCarrito} />
        </div>
    )
}

export default Carrito