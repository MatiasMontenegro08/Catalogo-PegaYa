/**
 * Modal.jsx
 *
 * Componente reutilizable para mostrar contenido en un modal (ventana emergente).
 *
 * Props:
 * - isOpen (boolean): Si es true, el modal se muestra; si es false, no se renderiza nada.
 * - onClose (function): Función que se ejecuta al hacer clic en el botón de cerrar.
 * - children (ReactNode): Contenido a mostrar dentro del modal.
 *
 * Uso:
 * <Modal isOpen={modalAbierto} onClose={cerrarModal}>
 *   <ContenidoDelModal />
 * </Modal>
 *
 * El modal incluye un overlay oscuro y un botón de cierre accesible.
 */

import React from 'react'
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" aria-label='Cerrar modal' onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    )
}

export default Modal