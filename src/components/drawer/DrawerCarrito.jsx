import { useState } from "react";
import './drawercarrito.css';
import Carrito from "../carrito/Carrito";

export default function DrawerCarrito() {
    const [isOpen, setIsOpen] = useState(false);

    const stickers = Array.from({ length: 30 }, (_, i) => `Sticker ${i + 1} - Cantidad: 2`);

    return (
        <div>
            <button className="btn-carrito" onClick={() => setIsOpen(true)}>🛒</button>

            {isOpen && (
                <div className="drawer-overlay" onClick={() => setIsOpen(false)}>
                    <div className="drawer" onClick={(e) => e.stopPropagation()}>
                        <Carrito stickers={stickers} />
                        <button className="btn-cerrar" onClick={() => setIsOpen(false)}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}