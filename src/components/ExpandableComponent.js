import React, { useState, useEffect, useRef } from 'react';
import tuImagen from '../resources/icons/nav1.png';

const ExpandableComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const bannerStyle = {
        position: 'fixed',
        top: 'calc(48px)',
        left: 'calc(50% - 164px)', 
        zIndex: 999,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: 'transparent', 
        //width: isVisible ? '264px' : '72px', 
        //height: isVisible ? '330px' : '72px',
        width: 'auto',
        height: 'auto',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '16px',
        paddingRight: '0px',
        borderRadius: '8px',
        overflow: 'hidden',
    };
    const pulsarStyle = {
        width: '32px',
        height: '32px',
        backgroundImage: `url(${tuImagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0px',
        zIndex: '1',
        margin: '10px 0'
    };
    const backStyle = {
        position: 'absolute',
        backgroundColor: 'transparent',
        border: 'solid 2px white',
        width: '32px',
        height: '32px', 
        top: '8px',
        left: '14px',
        borderRadius: '50%',
        zIndex: '-1',
    }
    const colores = ["#12968b","#12968b","#f48acc","#13b8c3","#e0c33c","#c4a9b8","#1f1f1f","#1686b0","#ca973b","#ffd457","#ffd457","#ffd457","#ffd457","#2e2e2e","#2e2e2e","#2e2e2e"];
    const mitad = Math.ceil(colores.length / 2);
    const primerMitad = colores.slice(0, mitad);
    const segundaMitad = colores.slice(mitad);
    console.log("primerMitad: ", primerMitad);
    return (
        <div ref={ref} style={bannerStyle}>
            <div className='backStyle' style={backStyle}>
                <div className='divPoint divPoint-1'></div>
                <div className='divPoint divPoint-2'></div>
                <div className='divPoint divPoint-3'></div>
                <div className='divPoint divPoint-4'></div>
            </div>
            <div onClick={toggleVisibility} style={pulsarStyle}></div>

            <div className='styleSide styleSide-B' style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridGap: '1px',
                        gridRowGap: '1px',
                        gridColumnGap: '1px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                    {colores.map((color, index) => (
                        <div key={index} className='itemNavBarStyle' style={{ backgroundColor: color }}>
                            <p>{index}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default ExpandableComponent;

/**
  {isVisible && (
                <div className='styleSide styleSide-A'>
                    {primerMitad.map((color, index) => (
                        <div key={index} className='itemNavBarStyle' style={{ backgroundColor: color }}>
                            </div>
                            ))}
                        </div>
                    )}
 */
