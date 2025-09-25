/**
 * CardStickers.jsx
 *
 * Componente que muestra la información de un sticker en formato de tarjeta.
 * Permite ver la imagen en grande en un modal y agregar el sticker al carrito.
 *
 * Props:
 * - sticker (object): Objeto con los datos del sticker (titulo, imagenUrl, codigo, precio, etc.).
 *
 * Funcionalidad:
 * - Al hacer clic en la imagen, se abre un modal con la imagen ampliada.
 * - Al hacer clic en el botón, agrega el sticker al carrito usando el contexto global.
 * - Aplica estilos desde 'cards.css'.
 */

import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CardStickers = ({ sticker }) => {
    const [showModal, setShowModal] = useState(false);
    const { agregarSticker } = useContext(CartContext);

    const handleImgClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false)

    const agregarAlCarrito = () => {
        const stickerCarrito = {...sticker, cantidad: 1};
        agregarSticker(stickerCarrito);
    }

    return (
        <>
            <div className="card">
                <div className="card-img" onClick={handleImgClick} style={{ cursor: 'pointer' }}>
                    <img src={sticker.imagenUrl} alt={sticker.titulo} />
                </div>
                <div className="card-detalle">
                    <h3>{sticker.titulo}</h3>
                    <p>{sticker.codigo} $ {sticker.precio}</p>
                </div>
                <div className="button">
                    <button onClick={() => agregarAlCarrito()} aria-label='Agregar al carrito'>Agregar al carrito</button>
                </div>
            </div>
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
                        <button
                            className="close-modal-btn"
                            onClick={handleCloseModal}
                            aria-label="Cerrar imagen"
                        >
                            &#10005;
                        </button>
                        <img src={sticker.imagenUrl} alt={sticker.titulo} style={{ width: '80vw', maxWidth: '500px' }} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CardStickers
