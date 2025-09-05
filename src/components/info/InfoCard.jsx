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