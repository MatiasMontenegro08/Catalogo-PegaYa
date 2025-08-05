import React from 'react'
import { useState, useEffect } from 'react'
import InfoSection from '../info/InfoSection'
import ContainerCategorias from '../categoriasListado/ContainerCategorias'
import Catalogo from '../catalogo/Catalogo'
// import CardContainer from './CardContainer'

const Main = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

    const onSelectCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria)
    }

    return (
        <main className='main'>
            <InfoSection />
            <ContainerCategorias onSelectCategoria={onSelectCategoria} categoriaSeleccionada={categoriaSeleccionada} />
            <Catalogo categoriaSeleccionada={categoriaSeleccionada}/>
            
            {/* <section className='section3'>
                <div className='filtro'>Buscador</div>
                <div className="container-card">
                    <div className='cards'>Tarjetas</div>
                    <div className='cards'>Tarjetas</div>
                    <div className='cards'>Tarjetas</div>
                    <div className='cards'>Tarjetas</div>
                    <div className='cards'>Tarjetas</div>
                    <div className='cards'>Tarjetas</div>
                </div>
            </section> */}
        </main>
    )
}

export default Main
