import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarSticker = (stickerNuevo) => {
        const condicion = estaEnElCarrito(stickerNuevo.id);

        if(condicion){
            alert("El sticker ya esta en el carrito"); // Cambiar por un toast
        }else{
            setCarrito([...carrito, stickerNuevo]);
        }
    }

    const estaEnElCarrito = (idSticker) => {
        const condicional = carrito.some((stickerCarrito) => stickerCarrito.id === idSticker);
        return condicional;
    }

    const cantidadTotal = () => {
        const total = carrito.reduce((acc, stickerDelCarrito) => acc + stickerDelCarrito.cantidad, 0);
        return total;
    }

    const precioTotal = () => {
        const precio = carrito.reduce((acc, stickerDelCarrito) => acc + (stickerDelCarrito.precio * stickerDelCarrito.cantidad), 0);
        return precio;
    }

    const borrarSticker = (idSticker) => {
        const stickerFiltrado = carrito.filter((stickerCarrito) => stickerCarrito.id !== idSticker);
        setCarrito(stickerFiltrado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={{carrito, setCarrito, agregarSticker, cantidadTotal, precioTotal, borrarSticker, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }