// Componente Popup.js
import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        height: '110vh',
        display: 'flex',
        alignItems:'center',
        justifyItems: 'center',
        justifyContent: 'center',
    };

    const contentStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '100%',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#000000',
        padding: '0px',
        zIndex: 1001,
        display: 'flex',
        alignItems:'center',
        justifyItems: 'center',
        justifyContent: 'center',
    };

    const botonStyle = {
        position: 'absolute',
        top: '16px',
        right: '16px',
        borderRadius: '8px',
        zIndex: 1005,
    }
    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={contentStyle} onClick={e => e.stopPropagation()} className="popup-content">
                {children}
            </div>
            <button style={botonStyle} onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Popup;