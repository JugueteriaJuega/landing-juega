import React, { useRef, useEffect, useState } from 'react';

const ImageComponent = ({ src, alt, className }) => {
    const canvasRef = useRef(null);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = src;
        img.onload = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;
            console.log("colores: ", data.length);
            let colorSample = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
            setColors(prevColors => [...prevColors, colorSample]);
        };
    }, [src]);

    const containertyle = {
        width: 'calc(100% - 16px)',
        height: 'calc(100% - 40px)',
        //objectFit: 'cover',
        display: 'block',  
        position: 'relative',
        overflow: 'hidden',
        scroll: 'none',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const imageStyle = {
        width: '100%',
        height: '100%',
        //objectFit: 'cover',
        display: 'block',  
        position: 'relative',
        overflow: 'hidden',
        scroll: 'none',
        borderRadius: '16px',
        //backgroundColor: colors[0]//dominantColor
    };
    return (
        <div style={containertyle}>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <img className={className} alt={alt || "Imagen"} src={src} style={imageStyle} />            
        </div>
        //src={src}
    );
};

export default ImageComponent;
