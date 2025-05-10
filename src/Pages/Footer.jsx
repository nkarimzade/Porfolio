import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
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
