import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';

const CategoriasDropdown = ({ categorias, onSelectCategoria }) => {
    return (
        <section className='section-categorias'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categorías
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onSelectCategoria('Todas')}>Todas</Dropdown.Item>
                    {categorias.map((cat, index) => (
                        <Dropdown.Item key={index} onClick={() => onSelectCategoria(cat)}>
                            {cat}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}

export default CategoriasDropdown
