// componente PageV2.js
import React, { forwardRef, useState } from 'react';
import Background from './Background';
import BotonWhatsApp from './BotonWhatsApp';
import Popup from './Popup';
import VideoPlayer from './VideoPlayer';

const PageV2 = forwardRef(({ index, backColor, className, src, shouldAnimate, whappMessage, fileVideo, percentageVideo, children }, ref) => {
    const pageStyle = {
        transition: 'background 0.35s ease',
        width: '100%',
        height: '90vh',
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
        <div id={'NavPage' + index} ref={ref} className={pageClassName} style={pageStyle}>
            <Background className="background" backColor="blue" src={src}></Background>
            <Popup isOpen={isPopupOpen} onClose={togglePopup}>
                <VideoPlayer key={fileVideo} src={fileVideo} width={percentageVideo} height="auto" controls={true} />
            </Popup>
            <BotonWhatsApp onOpenPopup={togglePopup} messageWhapp={whappMessage} />
        </div>
    );
});

export default PageV2;