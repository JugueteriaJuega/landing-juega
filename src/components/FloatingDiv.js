import React from 'react';
import tuImagen from '../resources/icons/arrowUpDown.png';

const FloatingDiv = () => {
    const style = {
        position: 'absolute',
        bottom: 'calc(10% - 25px)',
        left: 'calc(50% - 25px)',
        width: '50px',
        height: '50px',
        backgroundColor: 'transparent', // Color para visualización, puedes cambiarlo
        backgroundImage: `url(${tuImagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0'
    };

    return (
        <div className='floatingDiv' style={style}>
            {/* Contenido del div */}
        </div>
    );
};

export default FloatingDiv;
