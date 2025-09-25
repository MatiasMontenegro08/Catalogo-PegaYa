/**
 * Carrito.jsx
 *
 * Componente principal del carrito de compras.
 *
 * - Muestra el encabezado, la lista de productos, los totales y los botones de acción del carrito.
 * - Utiliza el contexto CartContext para acceder a los datos y funciones globales del carrito.
 * - Aplica estilos desde 'carrito.css'.
 *
 * No recibe props.
 */

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
            <CarritoTotales precioTotal={precioTotal} cantidadTotal={cantidadTotal} />
            <CarritoBotones vaciarCarrito={vaciarCarrito} copiarPedidoEIrAInstagram={copiarPedidoEIrAInstagram}/>
        </div>
    )
}

export default Carrito