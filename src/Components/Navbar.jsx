import './Navbar.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Navbar() {
  useEffect(() => {
    ScrollReveal().reveal('.proje-tanitim', {
            origin: 'bottom',
            distance: '50px',
            duration: 800,
            delay: 100,
            easing: 'ease-in-out',
            reset: false,
            interval: 200 
        });
  }, []);

  return (
    <nav className="navbar">
      <div className="left">
        <a href="https://nasibkarimzade.vercel.app/">
        <img src="/logo - Kopya.jpg" alt="Logo" className="logo" /></a>
        <div className="text">
          <strong>Nasib Karimzade</strong><br />
          Full Stack Web Developer
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
