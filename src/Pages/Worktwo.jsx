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
        <a target='_blank' className="Tittle" href="https://myweatherapp-nk.vercel.app/">MyWeatherApp</a>
        <br /><br />
        <p className="paragraf">
          This web application provides real-time weather data, allowing users to access live information such as temperature, humidity, and wind based on their location. With its user-friendly interface, it offers a clean and fast experience.
        </p>
        <br />
        <p className="tarih">28 April, 2025 ·</p>
        <br />
        <div className="dot-container">• • •</div>
      </div>
      <div className="proje-tanitim">
        <a target="_blank" className="Tittle" href="https://youtubevideoozet.vercel.app/">YouTube Video Summarizer</a>
        <br /><br />
        <p className="paragraf">
          This tool allows users to input a YouTube video link and receive an AI-generated summary of its content. It saves time and provides quick access to key information.
        </p>
        <br />
        <p className="tarih">29 March , 2025 ·</p>
        <br />
        <div className="dot-container">• • •</div>
      </div>
      <br />
      <div className="proje-tanitim">
        <a target="_blank" className="Tittle" href="https://cankirigazozu.com.tr">Cankiri Soda</a>
        <br /><br />
        <p className="paragraf">
          This promotional website was created to showcase Çankırı’s local soda brand. It presents the brand identity, product variety, and contact information with a stylish and elegant design.
        </p>
        <br />
        <p className="tarih">8 May , 2025 ·</p>
        <br />
        <div className="dot-container">• • •</div>
        <br />

      </div>

      <div style={{
        textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center',
        marginBottom: '50px'
      }}>
        <Link to="/work" className=" page-link">
          <div >
            <FaChevronLeft />
          </div>
        </Link>
        <p className='page-link' >Page 2</p>

        <Link to="/workthree" className=" page-link">
          <div >
            <FaChevronRight />
          </div>
        </Link>

      </div>
      <br />
    </div>
  );
}

export default Worktwo;
