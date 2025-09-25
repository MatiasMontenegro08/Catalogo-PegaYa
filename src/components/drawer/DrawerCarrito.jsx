/**
 * DrawerCarrito.jsx
 *
 * Componente que muestra un botón flotante de carrito y un drawer (panel lateral inferior) con el contenido del carrito.
 *
 * - Al hacer clic en el botón 🛒, se abre el drawer mostrando el componente <Carrito />.
 * - El drawer se cierra al hacer clic fuera de él o en el botón "x" de cierre.
 * - Usa estado local (isOpen) para controlar la visibilidad del drawer.
 * - Aplica estilos desde 'drawercarrito.css'.
 *
 * No recibe props.
 */

import { useState } from "react";
import Carrito from "../carrito/Carrito";
import './drawercarrito.css';

export default function DrawerCarrito() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className="btn-carrito" onClick={() => setIsOpen(true)} aria-label="Ver carrito">🛒</button>

            {isOpen && (
                <div className="drawer-overlay" onClick={() => setIsOpen(false)}>
                    <div className="drawer" onClick={(e) => e.stopPropagation()}>
                        <Carrito/>
                        <button className="btn-cerrar" onClick={() => setIsOpen(false)} aria-label="Cerrar carrito">x</button>
                    </div>
                </div>
            )}
        </div>
    );
}