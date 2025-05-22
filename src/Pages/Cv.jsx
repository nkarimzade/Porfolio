import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Cv.css';

const Cv = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        // Scroll takip fonksiyonu
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // ScrollReveal efektleri
        ScrollReveal().reveal('.cv', {
            delay: 300,
            distance: '40px',
            origin: 'bottom',
            opacity: 0,
            duration: 1500,
            reset: true,
        });

        ScrollReveal().reveal('.cv-button', {
            delay: 500,
            distance: '50px',
            origin: 'right',
            opacity: 0,
            duration: 2000,
            reset: true,
        });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`cv-container ${scrolling ? 'scrolling' : ''}`}>
            <div className="cv">
                <button
                    className="cv-button"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/CV - Nasib Karimzade.pdf'; 
                        link.download = 'Nasib_CV.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    CV İndir
                </button>

            </div>
        </div>
    );
};

export default Cv;
