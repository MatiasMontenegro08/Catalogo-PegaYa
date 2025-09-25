/**
 * ContainerCard.jsx
 *
 * Componente que muestra un listado de stickers en formato de cards, con paginación y filtrado por categoría.
 *
 * Props:
 * - categoriaSeleccionada (string): Categoría actual seleccionada para filtrar los stickers.
 *
 * Funcionalidad:
 * - Obtiene los stickers desde Firebase Firestore.
 * - Filtra los stickers según la categoría seleccionada.
 * - Implementa paginación para mostrar un número limitado de stickers por página.
 * - Muestra los stickers usando el componente CardStickers.
 * - Utiliza react-bootstrap/Pagination para la paginación.
 * - Aplica estilos desde 'cards.css'.
 */

import React, { useState, useEffect } from 'react';
import CardStickers from './CardStickers';
import Pagination from 'react-bootstrap/Pagination';
import { collection, getDocs } from 'firebase/firestore';
import database from '../../database/database.js';
import './cards.css';

const ContainerCard = ({ categoriaSeleccionada }) => {
    const [paginaActual, setPaginaActual] = useState(1);
    const itemsPorPagina = 20;
    const [stickers, setStickers] = useState([]);

    // Obtiene los stickers desde Firestore
    const getStickers = async () => {
        try {
            const stickersRef = collection(database, 'stickers');
            const dataDb = await getDocs(stickersRef);
            const data = dataDb.docs.map((stickerDb) => {
                return { id: stickerDb.id, ...stickerDb.data() }
            })
            setStickers(data);
        } catch (error) {
            console.log(error);
        }
    };
    getStickers();

    // Cada vez que cambia la categoría, volvemos a la página 1
    useEffect(() => {
        setPaginaActual(1);
    }, [categoriaSeleccionada]);

    // Filtrar los stickers según la categoría seleccionada
    const stickersFiltrados = categoriaSeleccionada === 'Todas'
        ? stickers
        : stickers.filter(sticker => sticker.categoriaId === categoriaSeleccionada);

    // Calcular cuántas páginas hay
    const totalPaginas = Math.ceil(stickersFiltrados.length / itemsPorPagina);

    // Obtener los stickers que se deben mostrar en la página actual
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const stickersPagina = stickersFiltrados.slice(inicio, fin);

    // Armar los botones de paginación
    const itemsPaginacion = [];
    for (let i = 1; i <= totalPaginas; i++) {
        itemsPaginacion.push(
            <Pagination.Item key={i} active={i === paginaActual} onClick={() => setPaginaActual(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <>
            <div className='container-card'>
                {stickersPagina.map((sticker) => (
                    <CardStickers key={sticker.id} sticker={sticker} />
                ))}
            </div>

            {/* Mostrar la paginación solo si hay más de una página */}
            {totalPaginas > 1 && (
                <div className='d-flex justify-content-center mt-4'>
                    <Pagination>{itemsPaginacion}</Pagination>
                </div>
            )}
        </>
    );
};

export default ContainerCard;