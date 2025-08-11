import React, { useState, useEffect } from 'react';
import CardStickers from './CardStickers';
import stickersData from '../../database/stickers.json';
import Pagination from 'react-bootstrap/Pagination';
import './cards.css';

const ContainerCard = ({ categoriaSeleccionada }) => {
    const [paginaActual, setPaginaActual] = useState(1);
    const itemsPorPagina = 20;

    // Cada vez que cambia la categoría, volvemos a la página 1
    useEffect(() => {
        setPaginaActual(1);
    }, [categoriaSeleccionada]);

    // Filtrar los stickers según la categoría seleccionada
    const stickersFiltrados = categoriaSeleccionada === 'Todas'
        ? stickersData
        : stickersData.filter(sticker => sticker.categoria === categoriaSeleccionada);

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
                {stickersPagina.map((sticker, index) => (
                    <CardStickers key={index} sticker={sticker} />
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