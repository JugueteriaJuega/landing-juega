// VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, width, height, controls }) => {
    const videoStyle = {
        display: 'flex',
        alignItems:'center',
        justifyItems: 'center',
        justifyContent: 'center',
    }
    const noVideoStyle = {
        display: 'flex',
        aligItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'black',
        overflow: 'Hidden'
    }
    if (!src) {
        return <div style={noVideoStyle}><div className="novideoTag" >NoVideo</div></div>; // Mensaje cuando no hay video
    }

    return (
        <video style={videoStyle} width={width} height={height} controls={controls} autoPlay className="video-player">
            <source src={src} type="video/mp4" />
            Tu navegador no soporta videos MP4.
        </video>
    );
};

export default VideoPlayer;
