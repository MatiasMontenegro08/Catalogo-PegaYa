import React from 'react'
import './cards.css'
import CardStickers from './CardStickers'
import stickersData from '../../database/stickers.json'

const ContainerCard = ({categoriaSeleccionada}) => {
    // Filtrar los stickers según la categoría seleccionada
    const stickersFiltrados = categoriaSeleccionada === 'Todas'
        ? stickersData
        : stickersData.filter(sticker => sticker.categoria === categoriaSeleccionada)

    // Renderizar los stickers filtrados
    return (
        <div className='container-card'>
            {stickersFiltrados.map((sticker, id) => (
                <CardStickers key={id} sticker={sticker} />
            ))}
        </div>
    )
}

export default ContainerCard
