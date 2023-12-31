// src/components/Page.js
import React, { forwardRef, useState } from 'react';
import Background from './Background';

const Page = forwardRef(({ backColor, children, className, src, shouldAnimate  }, ref) => {
    const pageStyle = {
        transition: 'background 0.35s ease',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: backColor,
        position: 'relative',
    };
    const pageClassName = `${className} ${shouldAnimate ? 'pageTransition' : ''}`;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
    
    return (
        <div ref={ref} className={pageClassName} style={pageStyle}>
            <Background className="background" backColor="blue" src={src}></Background>
        </div>
    );
});

export default Page;

