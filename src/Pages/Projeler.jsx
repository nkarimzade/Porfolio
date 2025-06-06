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
        <div className="projeler">
            <div className="text">
                <h1>Projeler</h1>
            </div>
            <ol>
                <li>
                    <a href="https://kyraxai.vercel.app" target="_blank" rel="noopener noreferrer">
                        KyraxAi Yapay Zeka
                    </a>
                    <p>
                        ➤ Bu proje, yapay zeka destekli bir sohbet arayüzüdür. Kullanıcılar ChatGPT benzeri bir sistemle yazılı olarak iletişim kurabilir. Modern bir UI/UX tasarımıyla kullanıcı dostu bir deneyim sunar.
                    </p>
                </li>
                <li>
                    <a href="https://myweatherapp-nk.vercel.app/" target="_blank" rel="noopener noreferrer">
                        MyWeatherApp
                    </a>
                    <p>
                        ➤ Gerçek zamanlı hava durumu bilgilerini sunan bu web uygulaması, kullanıcıların konumlarına göre anlık sıcaklık, nem, rüzgar gibi verilere erişmesini sağlar. Kullanıcı dostu arayüzüyle sade ve hızlı bir deneyim sunar.
                    </p>
                </li>

                <li>
                    <a href="https://uzunoba.vercel.app" target="_blank" rel="noopener noreferrer">
                        UzunOba Restoran QR-Code
                    </a>
                    <p>
                        ➤ Restoranlara özel hazırlanmış bu web uygulaması, menüyü QR kod ile sunma imkanı sağlar. Müşteriler, masadaki QR kodu okutarak dijital menüye ulaşabilir ve detaylı ürün bilgilerine erişebilir.
                    </p>
                </li>
                <li>
                    <a href="https://gazoz-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Çankırı Gazozu
                    </a>
                    <p>
                        ➤ Çankırı'nın yerel gazoz markasını tanıtmak için hazırlanmış tanıtım sitesi. Marka kimliği, ürün çeşitleri ve iletişim bilgileri şık bir tasarımla sunulmuştur.
                    </p>
                </li>
                <li>
                    <a href="https://youtubevideoozet.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Youtube Video Özetleyici
                    </a>
                    <p>
                        ➤ Kullanıcılar bir YouTube videosunun linkini girerek, videonun içeriğini yapay zeka ile özetleyebilir. Zaman kazandıran ve bilgiye hızlı erişim sağlayan bir araçtır.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Projeler;
