import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarSticker = (stickerNuevo) => {
        const condicion = estaEnElCarrito(stickerNuevo.id);

        if (condicion) {
            alert("El sticker ya esta en el carrito"); // Cambiar por un toast
        } else {
            setCarrito([...carrito, stickerNuevo]);
        }
    }

    const cambiarCantidad = (id, nuevaCantidad) => {
    setCarrito(carrito =>
        carrito.map(item =>
            item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
    );
};

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

    const copiarPedidoEIrAInstagram = () => {
    // 1. Generar el texto del pedido
    let textoPedido = "¡Hola! Quiero pedir estos stickers:\n\n";
    carrito.forEach(item => {
        textoPedido += `- ${item.titulo} x${item.cantidad}\n`;
    });
    textoPedido += `\nTotal: $${precioTotal()}`;

    // 2. Copiar al portapapeles
    navigator.clipboard.writeText(textoPedido)
        .then(() => {
            // 3. Redirigir a Instagram (puedemos cambiar el link por el chat directo también)
            window.open("https://www.instagram.com/pegaya.ar/", "_blank");
        })
        .catch(() => {
            alert("No se pudo copiar el pedido al portapapeles.");
        });
};

    return (
        <CartContext.Provider value={{ carrito, setCarrito, agregarSticker, cantidadTotal, precioTotal, borrarSticker, vaciarCarrito, cambiarCantidad, copiarPedidoEIrAInstagram }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }