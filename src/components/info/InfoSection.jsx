import React from 'react'
import InfoCard from './InfoCard';
import './info.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <InfoCard title="Nosotros" description="Tienda de stickers en Reconquista, un poco mas de descripción para completar el div" />
            <InfoCard title="Contacto" description="@pegaya.ar" />
            <InfoCard title="Pedidos" description="Podes revisar nuestro catálogo, seleccionar los diseños que mas te gustan agregandolos a la lista y luego podras copiar el pedido y enviarnos por mensaje a traves de instagram" />
        </section>
    )
}

export default InfoSection
