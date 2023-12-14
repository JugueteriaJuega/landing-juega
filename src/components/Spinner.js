import React, { useState, useEffect, useRef } from 'react';
import tuImagen from '../resources/icons/nav1.png';

const Spinner = () => {
    const bannerStyle = {
        position: 'absolute',
        top: 'calc(50% + calc(8px * 0))',
        left: 'calc(50% - calc(8px * 3))', 
        zIndex: 999,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: 'transparent', 
        width: 'auto',
        height: 'auto',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '16px',
        paddingRight: '0px',
        borderRadius: '8px',
        transform: 'scale(0.75)'
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
        width: '48px',
        height: '48px', 
        top: '2px',
        left: '6px',
        borderRadius: '50%',
        zIndex: '-1',
    }
    return (
        <div style={bannerStyle}>
            <div className='spinner' style={backStyle}>
                <div className='divPoint divPoint-1'></div>
                <div className='divPoint divPoint-2'></div>
                <div className='divPoint divPoint-3'></div>
                <div className='divPoint divPoint-4'></div>
            </div>
            <div className='pulsarStyle' style={pulsarStyle}></div>
        </div>
    );
};

export default Spinner;
