import React from 'react'
import ContainerCard from '../containerCard/ContainerCard'
import './catalogo.css'

const Catalogo = ({categoriaSeleccionada}) => {
    return (
        <section className='catalogo'>
            <h2>Stickers</h2>
            <ContainerCard categoriaSeleccionada={categoriaSeleccionada} />
        </section>
    )
}

export default Catalogo