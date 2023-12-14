// Componente LandingJuegav2.js
import React, { useState, useEffect } from 'react';
import infoJuguetes from './info';
import PageV2 from './PageV2';
import FloatingDiv from './FloatingDiv';
import Loading from './Loading';
import GridProduct from './GridProduct';

const styleLanding = {
    minWidth: '340px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '8px',
    paddingRight: '8px',
}

//document.body.style.overflow = 'hidden';

const LandingJuegav2 = ({onLoaded}) => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    return (
      <div style={styleLanding}>
        <Loading />
        {infoJuguetes.JUGUETES.map((juguete, index) => (
        <PageV2
              key={index}
              index={index}
              backColor={backgroundColor}
              className="section Page"
              src={juguete.Image.path}
              whappMessage={juguete.TextoWhatsApp}
              fileVideo={juguete.Video.path}
              percentageVideo ={juguete.Video.percentage}
            />
        ))}
      </div>
    );
};
export default LandingJuegav2;