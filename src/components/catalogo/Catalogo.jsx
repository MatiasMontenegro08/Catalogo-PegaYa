/**
 * Catalogo.jsx
 *
 * Componente que muestra la sección principal del catálogo de stickers.
 *
 * - Muestra el título "Stickers".
 * - Renderiza el componente ContainerCard, pasando la categoría seleccionada como prop para filtrar los stickers.
 * - Aplica estilos desde 'catalogo.css'.
 *
 * Props:
 * - categoriaSeleccionada (string): Categoría actual seleccionada para filtrar los stickers.
 */

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