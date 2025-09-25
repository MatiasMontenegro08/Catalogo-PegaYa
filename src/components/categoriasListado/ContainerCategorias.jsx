/**
 * ContainerCategorias.jsx
 *
 * Componente que muestra el listado de categorías para filtrar los stickers del catálogo.
 *
 * - Obtiene las categorías desde Firebase Firestore al montar el componente.
 * - Ordena las categorías alfabéticamente, dejando "Todas" siempre en primer lugar.
 * - Permite seleccionar una categoría haciendo clic en ella, llamando a la función onSelectCategoria.
 * - Resalta la categoría seleccionada.
 * - Aplica estilos desde 'categorias.css'.
 *
 * Props:
 * - onSelectCategoria (function): Función que se ejecuta al seleccionar una categoría.
 * - categoriaSeleccionada (string): Nombre de la categoría actualmente seleccionada.
 */

import React, { useState } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import database from '../../database/database.js';
import './categorias.css'

const ContainerCategorias = ({ onSelectCategoria, categoriaSeleccionada }) => {
    const [categorias, setCategorias] = useState([]);

    const getCategorias = async () => {
        try {
            const categoriasRef = collection(database, 'categorias');
            const dataDb = await getDocs(categoriasRef);
            let data = dataDb.docs.map((cate) => {
                return { id: cate.id, ...cate.data() }
            });

            // Ordenar alfabéticamente por titulo, excepto "Todas" primero
            data = data.sort((a, b) => {
                if (a.titulo === "Todas") return -1;
                if (b.titulo === "Todas") return 1;
                return a.titulo.localeCompare(b.titulo);
            });
            setCategorias(data);

        } catch (error) {
            console.log(error);
        }
    };

    getCategorias();
    return (
        <section className='section-categorias'>
            <h2>Categorías</h2>
            <div className='container-categorias'>
                <ul className='categoria-item'>
                    {categorias.map((cate) => (
                        <li
                            key={cate.id}
                            onClick={() => onSelectCategoria(cate.titulo)}
                            style={{ cursor: 'pointer' }}
                            className={categoriaSeleccionada === cate.titulo ? 'selected' : ''}
                        >
                            {cate.titulo}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ContainerCategorias
