// Componente BarNavigate.js
import React from 'react';

const BarNavigate = ({ onNavigate }) => {
    const bannerStyle = {
        position: 'fixed',
        top: 'calc(50% - 100px)', 
        left: 'auto',      
        zIndex: 999,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '16px',
        backgroundColor: 'rgba(41, 41, 41, 0.37)',
        with: 'auto',
        height: '200px',
        overflow: 'hidden',
        overflowY: 'auto',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        borderRadius: '8px',
    };
    const itmeStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '32px',
        width: 'auto',
    }
    const styleLink = { width: '25px', height: '25px', color: 'white', textDecoration: 'none', fontSize: '12px' }
    const colores = ["#12968b","#12968b","#f48acc","#13b8c3","#e0c33c","#c4a9b8","#1f1f1f","#1686b0","#ca973b","#ffd457","#ffd457","#ffd457","#ffd457","#2e2e2e","#2e2e2e","#2e2e2e"];
    //const indicesIncluidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const indicesIncluidos = [0, 1, 2, 3, 6, 7, 8, 13, 15];
    return (
        <div style={bannerStyle}>
            {colores.map((color, index) => {
                if (indicesIncluidos.includes(index)) {
                    return (
                        <div className='navBarAnimation' style={{backgroundColor: color, 
                                width: '32px', 
                                minHeight: '32px', 
                                textAlign: 'center', 
                                borderRadius: '8px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignContent: 'center',
                                fontWeight: 'bold',
                                }}>
                            <p>
                                <a href={'#NavPage' + index} style={styleLink}>
                                    {index + 1}
                                </a>
                            </p>
                        </div>
                    );
                }else{
                    return (
                        <div style={{backgroundColor: color, 
                                width: '32px', 
                                minHeight: '32px', 
                                textAlign: 'center', 
                                borderRadius: '8px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignContent: 'center',
                                fontWeight: 'bold',
                                }}>
                            <p>
                                <a href={'#NavPage' + index} style={styleLink}>
                                    {index + 1}
                                </a>
                            </p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

/**
 
<div style={bannerStyle}>
            {colores.map((color, index) => {
                if (indicesIncluidos.includes(index)) {
                    return (
                        <div className='navBarAnimation' style={{backgroundColor: color, 
                                width: '32px', 
                                minHeight: '32px', 
                                textAlign: 'center', 
                                borderRadius: '8px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignContent: 'center',
                                fontWeight: 'bold',
                                }}>
                            <p>
                                <a href={'#NavPage' + index} style={styleLink}>
                                    {index + 1}
                                </a>
                            </p>
                        </div>
                    );
                }else{
                    return (
                        <div style={{backgroundColor: color, 
                                width: '32px', 
                                minHeight: '32px', 
                                textAlign: 'center', 
                                borderRadius: '8px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignContent: 'center',
                                fontWeight: 'bold',
                                }}>
                            <p>
                                <a href={'#NavPage' + index} style={styleLink}>
                                    {index + 1}
                                </a>
                            </p>
                        </div>
                    );
                }
                return null;
            })}
        </div>

 */

export default BarNavigate;