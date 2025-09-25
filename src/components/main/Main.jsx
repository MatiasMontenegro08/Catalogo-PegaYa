/**
 * Main.jsx
 * 
 * Componente principal de la sección central de la aplicación.
 * 
 * - Maneja el estado de la categoría seleccionada para filtrar el catálogo.
 * - Integra el contexto del carrito para mostrar el DrawerCarrito solo si hay productos en el carrito.
 * - Incluye los componentes:
 *    - ContainerCategorias: listado de categorías para filtrar los stickers.
 *    - Catalogo: muestra los stickers filtrados por la categoría seleccionada.
 *    - InfoSection: sección informativa para el usuario.
 *    - DrawerCarrito: panel del carrito, visible solo si hay productos.
 * - Incluye un estado `estaCargando` preparado para mostrar un loader (a futuro).
 * 
 * No recibe props.
 */

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
    const [estaCargando, setEstaCargando] = useState(true); // Servirá para mostrar un loader
    const { carrito } = useContext(CartContext);

    /**
     * Actualiza la categoría seleccionada.
     * @param {string} categoria - Nombre de la categoría seleccionada.
     */
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