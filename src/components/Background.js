// componente Background.js
import React from 'react';
import ImageComponent from './ImageComponent';

const Background = ({ children, src }) => {
    const style = {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={style}>
            <ImageComponent className="ImageComponent" src={src} alt="Descripción de la imagen" />
        </div>
    );
};

export default Background;
