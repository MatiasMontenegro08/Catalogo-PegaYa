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
