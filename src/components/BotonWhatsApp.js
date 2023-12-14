// Componente BotonWhatsApp.js
import React, { useState, useEffect } from 'react';
import whatsappIcon from '../resources/icons/whatsapp.png';
import messengerIcon from '../resources/icons/messenger.png';
import playIcon from '../resources/icons/play.png';

const BotonWhatsApp = ({ onOpenPopup, messageWhapp }) => {
    const bannerStyle = {
        position: 'absolute',
        bottom: '9%', 
        right: '20px',      
        zIndex: 999,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '16px',
        backgroundColor: 'rgba(41, 41, 41, 0.37)',
        with: 'auto',
        height: 'auto',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderRadius: '16px',
    };
    const linkStyle = {
        width: '32px',
        height: '32px',
    }

    return (
        <div className='botonWhapp' style={bannerStyle} >
            <a href={`https://wa.me/51920212623?text=Juega !!! ... Quiero ${messageWhapp}`} target='_blank'>
                <img src={whatsappIcon} className='borderAnimation-whatsapp' alt="WhatsApp" height = '100%' style={linkStyle} />
            </a>
            <a href={`https://wa.me/51920212623?text=Juega !!! ... Quiero ${messageWhapp}`} target='_blank'>
                <img src={messengerIcon} className='borderAnimation-messenger' alt="WhatsApp" height = '100%' style={linkStyle} />
            </a>
            <a onClick={onOpenPopup}>
                <img src={playIcon} className='borderAnimation-media' alt="Media" height = '100%' style={linkStyle} />
            </a>
        </div>
    );
};

export default BotonWhatsApp;
