import { createContext, useState } from "react";
import { toast } from 'react-toastify';

/**
 * CartContext.jsx
 * 
 * Contexto global para el manejo del carrito de compras en la aplicación Catalogo-PegaYa.
 * 
 * Provee:
 * - carrito: array de stickers en el carrito.
 * - agregarSticker: agrega un sticker al carrito (evita duplicados).
 * - cambiarCantidad: cambia la cantidad de un sticker.
 * - cantidadTotal: retorna la cantidad total de stickers en el carrito.
 * - precioTotal: retorna el precio total del carrito.
 * - borrarSticker: elimina un sticker del carrito.
 * - vaciarCarrito: vacía el carrito.
 * - copiarPedidoEIrAInstagram: copia el pedido al portapapeles y abre Instagram.
 * 
 * Uso:
 * Envuelve la app con <CartProvider> para acceder a estos valores y funciones vía useContext(CartContext).
 */

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    /**
     * Agrega un sticker al carrito si este no existe en él.
     * @param {object} stickerNuevo - objeto del sticker a agregar.
     */
    const agregarSticker = (stickerNuevo) => {
        // Verificar si el sticker ya está en el carrito
        const condicion = estaEnElCarrito(stickerNuevo.id);

        // Si ya está, mostrar notificación de advertencia
        // Si no está, agregar al carrito y mostrar notificación de éxito
        if (condicion) {
            notify(toast.warn, 'El sticker ya se encuentra en el carrito');
        } else {
            setCarrito([...carrito, stickerNuevo]);
            notify(toast.success, 'Sticker agregado al carrito');
        }
    }

    /**
     * Cambia la cantidad de un sticker en el carrito.
     * @param {string} id 
     * @param {number} nuevaCantidad 
     */
    const cambiarCantidad = (id, nuevaCantidad) => {
        // Actualizar la cantidad del sticker con el id dado
        setCarrito(carrito =>
            carrito.map(item =>
                item.id === id ? { ...item, cantidad: nuevaCantidad } : item
            )
        );
    };

    /**
     * Verifica si un sticker está en el carrito por su ID.
     * @param {string} idSticker - ID del sticker a verificar.
     * @returns {boolean} - true si está en el carrito, false si no.
     */
    const estaEnElCarrito = (idSticker) => {
        // some() retorna true si al menos un elemento cumple la condición
        const condicional = carrito.some((stickerCarrito) => stickerCarrito.id === idSticker);
        return condicional;
    }

    /**
     * Calcula la cantidad total de stickers en el carrito.
     * @returns {number} - Cantidad total de stickers.
     */
    const cantidadTotal = () => {
        // Sumar la cantidad de cada sticker en el carrito
        const total = carrito.reduce((acc, stickerDelCarrito) => acc + stickerDelCarrito.cantidad, 0);
        return total;
    }

    /**
     * Calcula el precio total del carrito.
     * @returns {number} - Precio total del carrito.
     */
    const precioTotal = () => {
        // Sumar el precio de cada sticker multiplicado por su cantidad
        const precio = carrito.reduce((acc, stickerDelCarrito) => acc + (stickerDelCarrito.precio * stickerDelCarrito.cantidad), 0);
        return precio;
    }

    /**
     * Elimina un sticker del carrito por su ID.
     * @param {string} idSticker - ID del sticker a eliminar.
     */
    const borrarSticker = (idSticker) => {
        // Filtrar el carrito para excluir el sticker con el id dado y actualizar el estado
        const stickerFiltrado = carrito.filter((stickerCarrito) => stickerCarrito.id !== idSticker);
        setCarrito(stickerFiltrado);
    }

    /**
     * Vacía el carrito.
     * @returns {void}
     */
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    /**
     * Copia el pedido al portapapeles y abre Instagram en una nueva pestaña.
     */

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
                notify(toast.warning, "No se pudo copiar el pedido al portapapeles.");
            });
    };

    /**
     * Muestra una notificación toast si no hay otra activa.
     * @param {function} tipo - Función de toast (toast.success, toast.warn, etc.)
     * @param {string} mensaje - Mensaje a mostrar en la notificación.
     */
    const notify = (tipo, mensaje) => {
        // ID único para la notificación
        const toastId = "mi-toast-unico";

        // Mostrar la notificación solo si no hay otra activa
        if (!toast.isActive(toastId)) {
            tipo(mensaje, { toastId: toastId });
        }
    };

    return (
        <CartContext.Provider value={{ carrito, agregarSticker, cantidadTotal, precioTotal, borrarSticker, vaciarCarrito, cambiarCantidad, copiarPedidoEIrAInstagram }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }