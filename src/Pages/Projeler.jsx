import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Projeler.css';

const Projeler = () => {
    useEffect(() => {
        ScrollReveal().reveal('.text', {
            origin: 'left',
            distance: '50px',
            duration: 2000,
            delay: 200,
            reset: false,
        });

        ScrollReveal().reveal('.projeler li', {
            origin: 'bottom',
            distance: '30px',
            duration: 2000,
            interval: 200,
            reset: false,
        });
    }, []);

    return (
        <div>
            <div className="projeler">
                <div className="text">
                    <h1>Projeler</h1>
                </div>
                <ol>
                    <li><a target='_blank' href="https://kyraxai.vercel.app">KyraxAi Yapay Zeka</a></li>
                    <li><a target='_blank' href="https://uzunoba.vercel.app">UzunOba Restoran QR-Code</a></li>
                    <li><a target='_blank' href="https://gazoz-seven.vercel.app/">Çankırı Gazozu</a></li>
                </ol>
            </div>
        </div>
    );
};

export default Projeler;
