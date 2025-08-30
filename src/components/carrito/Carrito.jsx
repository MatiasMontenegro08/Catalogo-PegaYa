import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CarritoHeader from './CarritoHeader';
import CarritoItems from './CarritoItems';
import CarritoTotales from './CarritoTotales';
import CarritoBotones from './CarritoBotones';
import './carrito.css'

const Carrito = () => {
    const { carrito, borrarSticker, vaciarCarrito, cantidadTotal, precioTotal, cambiarCantidad, copiarPedidoEIrAInstagram } = useContext(CartContext);
    return (
        <div className='drawner'>
            <CarritoHeader />
            <CarritoItems carrito={carrito} cambiarCantidad={cambiarCantidad} borrarSticker={borrarSticker} />
            <CarritoTotales precioTotal={precioTotal} />
            <CarritoBotones vaciarCarrito={vaciarCarrito} copiarPedidoEIrAInstagram={copiarPedidoEIrAInstagram}/>
        </div>
    )
}

export default Carrito