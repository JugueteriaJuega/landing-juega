import React from 'react';
import tuImagen from '../resources/icons/arrowUpDown.png';

const FloatingDiv = () => {
    const style = {
        position: 'absolute',
        bottom: 'calc(15% - 25px)',
        left: 'calc(50% - 25px)',
        width: '50px',
        height: '60px',
        backgroundColor: 'transparent', // Color para visualización, puedes cambiarlo
        backgroundImage: `url(${tuImagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '1'
    };

    return (
        <div className='floatingDiv' style={style}>
            {/* Contenido del div */}
        </div>
    );
};

export default FloatingDiv;
