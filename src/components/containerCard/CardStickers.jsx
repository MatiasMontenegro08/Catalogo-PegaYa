import React from 'react'
import img from '../../assets/PegaYa 6x6.png'

const CardStickers = ({sticker}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={sticker.titulo} />
            </div>
            <div className="card-detalle">
                <h3>{sticker.titulo}</h3>
                <p>{sticker.codigo}</p>
            </div>
        </div>
    )
}

export default CardStickers
