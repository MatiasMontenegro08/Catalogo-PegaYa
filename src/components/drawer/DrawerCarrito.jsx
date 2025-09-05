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