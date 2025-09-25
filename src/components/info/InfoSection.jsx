/**
 * InfoSection.jsx
 *
 * Componente que muestra una sección informativa en la aplicación.
 *
 * - Utiliza el componente InfoCard para mostrar información relevante al usuario.
 * - Incluye dos tarjetas:
 *    1. "Pedidos": Explica cómo realizar un pedido a través de Instagram.
 *    2. "Contacto": Proporciona un enlace al Instagram de la tienda, mostrando el ícono de Instagram.
 * - Importa los estilos específicos de la sección desde 'info.css'.
 *
 * No recibe props.
 */

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import InfoCard from './InfoCard';
import './info.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <InfoCard title="Pedidos" description="“Elegí tus diseños, añadilos a la lista y enviá tu pedido por Instagram.”" />
            <InfoCard title="Contacto" description={"Visita nuestro instagram para realizar cualquier consulta."} link={"https://www.instagram.com/pegaya.ar/"} icon={<FaInstagram size={30} className='icon-instagram' />} />
        </section>
    )
}

export default InfoSection