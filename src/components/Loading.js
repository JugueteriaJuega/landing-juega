// componente Loading.js
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import infoResources from './infoResources';


const Loading = () => {
    const [imageSrc, setImageSrc] = useState(infoResources.RESOURCES[0].logo[0].image);
    const [isVisible, setIsVisible] = useState(true);
    const [isDisplay, setIsDisplay] = useState(true);
    const styleContainer = {
        position: 'fixed',
        left: 0,
        width: '100%',
        height: '110vh',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        zIndex: 99999,
        transition: 'all 0.5s ease',
        opacity: isVisible ? '1' : '0',
        display: isDisplay ? 'flex' : 'none',
        top: isVisible ? '0' : '-100px',
        //display: 'flex',
        //top: 0,
    };
    const styleControl = {
        position: 'absolute',
        top: 'calc(50% - calc(8px * 12))',
        width: '64px',
        height: '64px',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const styleImage = {
        width: 'auto',
        height: 'auto',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImageSrc(infoResources.RESOURCES[0].logo[0].image);
        }, 1000);

        const timeoutTop = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                document.body.style.overflow = 'visible';
                setIsDisplay(false); 
            }, 1000); 
        }, 4000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutTop);
            //clearTimeout(timeoutDisplay);
        };
    }, []);

    //console.log("infoResources: ", infoResources);
    return (
        <div id='loadingContainer' style={styleContainer} >
            <Spinner />
            <div id='loadingback' style={styleControl}>
                <img className='loading' id='loadingImage' src={imageSrc} style={styleImage}></img>
            </div>
        </div>
    );
};

export default Loading;