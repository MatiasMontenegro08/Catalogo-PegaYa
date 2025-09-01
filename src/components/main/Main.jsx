import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import InfoSection from '../info/InfoSection'
import ContainerCategorias from '../categoriasListado/ContainerCategorias'
import Catalogo from '../catalogo/Catalogo'
import DrawerCarrito from '../drawer/DrawerCarrito'
import './main.css'

const Main = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
    const [estaCargando, setEstaCargando] = useState(true); // Servira para mostrar un loader
    const { carrito, setCarrito } = useContext(CartContext);

    const onSelectCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria)
    }

    return (
        <main className='main'>
            <ContainerCategorias onSelectCategoria={onSelectCategoria} categoriaSeleccionada={categoriaSeleccionada} />
            <Catalogo categoriaSeleccionada={categoriaSeleccionada} />
            <InfoSection />
            {carrito.length > 0 && <DrawerCarrito/>}
        </main>
    )
}

export default Main;