import React, { useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function Worktwo() {
  useEffect(() => {
    ScrollReveal().reveal('.proje-tanitim', {
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 100,
      easing: 'ease-in-out',
      reset: false,
      interval: 200
    });

    ScrollReveal().reveal('.page-link', {
      origin: 'bottom',
      distance: '40px',
      duration: 800,
      delay: 50,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);

  return (
    <div>
      <div className="proje-tanitim">
        <a target="_blank" className="Tittle" href="https://naxauto.shop">NaxAuto – Nakhchivan Car Listing Platform</a>
        <p className="paragraf">
          A modern car listing platform developed for the Nakhchivan region. Users can post, search, and filter car advertisements. Designed with a responsive layout and a user-friendly interface.
        </p>
        <p className="tarih">April 1, 2025 ·</p>
        <div className="dot-container">• • •</div>
      </div>

      <div className="proje-tanitim">
        <a target="_blank" className="Tittle" href="https://cankirigazozu.com.tr">Cankiri Soda</a>
        <p className="paragraf">
          This promotional website was created to showcase Çankırı's local soda brand. It presents the brand identity, product variety, and contact information with a stylish and elegant design.
        </p>
        <p className="tarih">8 May , 2025 ·</p>
        <div className="dot-container">• • •</div>

      </div>
      <div className="proje-tanitim">
        <a target="_blank" className="Tittle" href="https://sademedyareklam.com.tr/">SadeMedya Advertising Agency Website</a>
        <p className="paragraf">
          A professional corporate website developed for SadeMedya, a creative advertising agency. The platform highlights the agency's services, portfolio, and innovative approach to digital marketing.
        </p>
        <p className="tarih">January 20, 2025 ·</p>
        <div className="dot-container">• • •</div>
      </div>
      <div style={{
        textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center',
        marginBottom: '0px'
      }}>
        
      </div>
    </div>
  );
}

export default Worktwo;
