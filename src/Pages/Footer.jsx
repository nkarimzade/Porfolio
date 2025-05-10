import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal('.footer-logo', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal('.footer-text', {
      origin: 'left',
      distance: '40px',
      duration: 2000,
      delay: 300,
      reset: false,
    });

    ScrollReveal().reveal('.footer-links a:nth-child(1)', {
      origin: 'right',
      distance: '30px',
      duration: 2000,
      delay: 400,
      reset: false,
    });

    ScrollReveal().reveal('.footer-links a:nth-child(2)', {
      origin: 'right',
      distance: '30px',
      duration: 2000,
      delay: 600,
      reset: false,
    });

    ScrollReveal().reveal('.footer-links a:nth-child(3)', {
      origin: 'right',
      distance: '30px',
      duration: 2000,
      delay: 800,
      reset: false,
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-center-logo">
        <img src="/logo.jpg" alt="KYRAX Logo" className="footer-logo" />
      </div>

      <p className="footer-text">© 2025 nK Blog<br />Tüm hakları saklıdır.</p>

      <div className="footer-links">
        <a target="_blank" href="https://github.com/nkarimzade" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:nesibkerimzade@gmail.com">
          <MdEmail /> İletişim
        </a>
        <a target="_blank" href="https://instagram.com/nkrmv">
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
