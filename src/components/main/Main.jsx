import React from 'react'
import { useState } from 'react'
import InfoSection from '../info/InfoSection'
import ContainerCategorias from '../categoriasListado/ContainerCategorias'
import Catalogo from '../catalogo/Catalogo'
import DrawerCarrito from '../drawer/DrawerCarrito'
import './main.css'

const Main = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

    const onSelectCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria)
    }

    return (
        <main className='main'>
            <InfoSection />
            <ContainerCategorias onSelectCategoria={onSelectCategoria} categoriaSeleccionada={categoriaSeleccionada} />
            <Catalogo categoriaSeleccionada={categoriaSeleccionada} />
            <DrawerCarrito />
        </main>
    )
}

export default Main
