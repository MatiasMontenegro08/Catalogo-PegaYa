import { useState } from "react";
import './drawercarrito.css';

export default function DrawerCarrito() {
    const [isOpen, setIsOpen] = useState(false);

    const stickers = Array.from({ length: 7 }, (_, i) => `Sticker ${i + 1} - Cantidad: 2`);

    return (
        <div>
            <button className="btn-carrito" onClick={() => setIsOpen(true)}>🛒</button>

            {isOpen && (
                <div className="drawer-overlay" onClick={() => setIsOpen(false)}>
                    <div className="drawer" onClick={(e) => e.stopPropagation()}>
                        <h2>Carrito</h2>
                        <ul>
                            {stickers.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>Total: $100</p>
                        <button className="btn-cerrar" onClick={() => setIsOpen(false)}>x</button>
                        <button className='btn-copiar'>boton de copiado</button>
                    </div>
                </div>
            )}
        </div>
    );
}
