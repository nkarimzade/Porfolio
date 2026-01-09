import './Navbar.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

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
    <>
      <nav className="navbar">
        <div className="left">
          <a href="https://nasibkarimzade.vercel.app/">
          <img src="/logo.png" alt="Logo" className="logo" /></a>
          <div className="text">
            <strong>Nasib Karimzade</strong>
            Full Stack Web Developer
          </div>
        </div>
      </nav>
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">about</Link></li>
          <li><Link to="/projects">web project</Link></li>
          <li><Link to="/mobile">mobile project</Link></li>
          <li><Link to="/experience">experience</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
