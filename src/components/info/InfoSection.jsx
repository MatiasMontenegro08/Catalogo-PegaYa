import React from 'react'
import InfoCard from './InfoCard';
import './info.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <InfoCard title="Pedidos" description="Podes revisar nuestro catálogo, seleccionar los diseños que mas te gustan agregandolos a la lista y luego podras copiar el pedido y enviarnos por mensaje a traves de instagram" />
            <InfoCard title="Contacto" description={"Visita nuestro instagram para realizar cualquier consulta"} link={"https://www.instagram.com/pegaya.ar/"} />
        </section>
    )
}

export default InfoSection
