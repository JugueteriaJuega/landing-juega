// componente GridProduct.js
import React, { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner';
import infoResources from './infoResources';


const GridProduct = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false); // Ocultar el panel
        }
    };

    const styleContainer = {
        position: 'absolute',
        //left: '50px',
        top: 0,
        width: '250px',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 99999,
        transition: 'all 0.5s ease',
        //opacity: isVisible ? '1' : '0',
        //display: isDisplay ? 'flex' : 'none',
        left: isVisible ? '0' : '-230px',
        backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        top: 0,
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    let texto = ">>"

    //console.log("infoResources: ", infoResources);
    return (
        <div id='gridProduct' ref={ref} style={styleContainer}>
            <button onClick={toggleVisibility}>{texto}</button>
            {/* Contenido del panel aquí */}
        </div>
    );
};

export default GridProduct;