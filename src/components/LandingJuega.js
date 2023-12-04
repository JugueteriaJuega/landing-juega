// Componente LandingJuega.js
import React, { useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Page from './Page';
import BotonWhatsApp from './BotonWhatsApp';
import BarNavigate from './BarNavigate';
import Popup from './Popup';
import VideoPlayer from './VideoPlayer';

import img0 from '../resources/0.png';
import img00 from '../resources/00.png';
import img1 from '../resources/1.png';
import img2 from '../resources/2.png';
import img3 from '../resources/3.png';
import img4 from '../resources/4.png';
import img5 from '../resources/5.png';
import img6 from '../resources/6.png';
import img7 from '../resources/7.png';
import img8 from '../resources/8.png';
import img9 from '../resources/9.png';
import img10 from '../resources/10.png';
import img11 from '../resources/11.png';
import img12 from '../resources/12.png';
import img13 from '../resources/13.png';
import img14 from '../resources/14.png';

import video1 from "../resources/video/video1.mp4";

const videos = [
  video1, video1
];
const styleLanding = {
  minWidth: '360px',
  maxWidth: '500px',
}
const LandingJuega = () => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [messageWhapp, setMessageWhapp] = useState('Hola Mundo !!!!');
  const [currentVideo, setCurrentVideo] = useState(videos[-1]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  const [fullpageApi, setFullpageApi] = useState(null);
  const navigateToPage = (pageIndex) => {
    // Asumiendo que tienes acceso a fullpageApi aquí
    fullpageApi.moveTo(pageIndex);
};
  return (
    <div style={styleLanding}>
    <ReactFullpage
      scrollingSpeed={375}
      onLeave={(origin, destination, direction) => {
        const newColor = "white";
        setBackgroundColor(newColor);
        console.log("Saliendo de la sección:", origin.index);
      }}
      afterLoad={(origin, destination, direction) => {
        const colores = ["#12968b","#12968b","#f48acc","#13b8c3","#e0c33c","#c4a9b8","#1f1f1f","#1686b0","#ca973b","#ffd457","#ffd457","#ffd457","#ffd457","#2e2e2e","#2e2e2e","#2e2e2e"]
        const newColor = colores[destination.index];//"#e79ef8";
        setBackgroundColor(newColor);

        const arrayProductName = ["el DINOSAUR SCOOTER","el DINOSAUR SCOOTER","la MUSIC PRINCESS","el DINO BEBE","el SLIDEBALL","la BUBBLE GUN","el STUNT CAR","el ELECTRIC DINOSAUR","el ATOMIZING DINOSAUR","la MODISH GOOD LUCK (PET 1)","la MODISH GOOD LUCK (STYLE 1)","la MODISH GOOD LUCK (STYLE 2)","la MODISH GOOD LUCK (PET 2)","la DIY GUN","la P18C","la P90"]
        const newProduct = arrayProductName[destination.index];
        setMessageWhapp(newProduct)

        const newVideo = videos[destination.index];
        console.log("URL del video: ", newVideo);
        setCurrentVideo(videos[destination.index] || null);
        console.log("Llegando a la sección:", destination.index);
      }}
      render={({ state, fullpageApi }) => {
        if (fullpageApi) {
          setFullpageApi(fullpageApi);
        }
        return (
          <ReactFullpage.Wrapper>
            {[img0, img00, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14].map((img, index) => (
              <Page
                key={index}
                className="section Page"
                backColor={backgroundColor}
                src={img}
              />
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
    <BarNavigate onNavigate={navigateToPage} />
    <BotonWhatsApp onOpenPopup={togglePopup} messageWhapp={messageWhapp} />
    <Popup isOpen={isPopupOpen} onClose={togglePopup}>
    <VideoPlayer key={currentVideo} src={currentVideo} width="100%" height="auto" controls={true} />
    </Popup>
    </div>
);
};

export default LandingJuega;




