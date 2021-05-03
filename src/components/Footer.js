import React from 'react';

const Footer = () => {
    return (
        <div className='container' style={{bottom: 0}}>
            <div className='row pt-3 justify-content-center' >
                <p className='text-light bg-light text-dark p-2' style={{borderRadius:10}}>Todos los derechos reservados</p>
            </div>
        </div>
    );
}

export default Footer;