import React from 'react'
import categoriasData from '../../database/categorias.json'
import './categorias.css'

const ContainerCategorias = ({ onSelectCategoria, categoriaSeleccionada }) => {
    return (
        <section className='section-categorias'>
            <h2>Categorías</h2>
            <div className='container-categorias'>
                <ul className='categoria-item'>
                    {categoriasData.map((categoria, index) => (
                        <li
                            key={index}
                            onClick={() => onSelectCategoria(categoria)}
                            style={{ cursor: 'pointer' }}
                            className={categoriaSeleccionada === categoria ? 'selected' : ''}
                        >
                            {categoria}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ContainerCategorias
