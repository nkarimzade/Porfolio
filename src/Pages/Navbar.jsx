import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // ScrollReveal import ediyoruz
import './Navbar.css';

const Navbar = () => {
  // Scroll durumunu kontrol etmek için state oluşturuluyor
  const [scrolling, setScrolling] = useState(false);

  // Scroll event'ini dinle
  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // 50px kaydırıldıysa navbar rengini değiştir
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    ScrollReveal().reveal('.navbar', {
      delay: 200, // Animasyon gecikmesi
      distance: '30px', // Ne kadar kayacak
      origin: 'top', // Kaydırılacak yön
      opacity: 0, // Başlangıçta görünmez olacak
      duration: 1000, // Animasyon süresi
      reset: true, // Sayfada kaydırıldıkça tekrar başlat
    });

    // Temizleme fonksiyonu
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="logo">
        <img src="/logo - Kopya.jpg" alt="nk Logo" />
      </div>
    </div>
  );
};

export default Navbar;
