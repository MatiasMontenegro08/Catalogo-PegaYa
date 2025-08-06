import React, { useState } from 'react'
import imgDefault from '../../assets/PegaYa 6x6.png'

const CardStickers = ({ sticker }) => {
    const [showModal, setShowModal] = useState(false)

    const handleImgClick = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <div className="card">
                <div className="card-img" onClick={handleImgClick} style={{ cursor: 'pointer' }}>
                    <img src={imgDefault} alt={sticker.titulo} />
                </div>
                <div className="card-detalle">
                    <h3>{sticker.titulo}</h3>
                    <p>{sticker.codigo} - $ {sticker.precio}</p>
                </div>
                <div className="button">
                    <button onClick={() => {}}>🛒</button>
                </div>
            </div>
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={imgDefault} alt={sticker.titulo} style={{ width: '80vw', maxWidth: '500px' }} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CardStickers
