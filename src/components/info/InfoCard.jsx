/**
 * InfoCard.jsx
 *
 * Componente reutilizable para mostrar una tarjeta informativa.
 *
 * Props:
 * - title (string): Título de la tarjeta.
 * - description (string, opcional): Descripción o texto informativo.
 * - link (string, opcional): URL a la que se redirige al hacer clic (se muestra como enlace).
 * - icon (ReactNode, opcional): Ícono a mostrar junto al enlace.
 *
 * Uso:
 * <InfoCard
 *   title="Pedidos"
 *   description="Elegí tus diseños y envía tu pedido por Instagram."
 * />
 *
 * <InfoCard
 *   title="Contacto"
 *   description="Visita nuestro Instagram para consultas."
 *   link="https://www.instagram.com/pegaya.ar/"
 *   icon={<FaInstagram />}
 * />
 */

import React from 'react'
import './info.css';

const InfoCard = ({ title, description, link, icon }) => {
    return (
        <div className="info-card">
            <h3>{title}</h3>
            {/* Render condicional */}
            {description && <p>{description}</p>}
            {link && <a href={link} target="_blank" rel="noopener noreferrer">{icon}@pegaya.ar</a>}
        </div>
    );
}

export default InfoCard