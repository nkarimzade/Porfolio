import React from 'react'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import './Blog.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Work() {
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
        ScrollReveal().reveal('.page-link', {
            origin: 'bottom',
            distance: '40px',
            duration: 800,
            delay: 500,
            easing: 'ease-in-out',
            reset: false
        });
    }, []);

    return (
        <div>
            <div className="proje-tanitim">
                <a target='_blank' className='Tittle' href="https://kyraxai.vercel.app/">KyraxAI Artificial Intelligence</a>
                <br /> <br />
                <p className='paragraf'>This project is an AI-driven chat interface that enables users to engage in text-based conversations, similar to ChatGPT. It features a sleek and modern UI/UX design to ensure an intuitive and seamless user experience.</p>
                <br />
                <p className="tarih"> December 16, 2024 · </p>
                <br />
                <div class="dot-container">• • •</div>

            </div>

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
                <a target='_blank' className="Tittle" href="https://uzunoba.vercel.app/">UzunOba Restorant QR-Code</a>
                <br /><br />
                <p className="paragraf">
                    This web application is specially designed for restaurants, allowing them to present their menu through a QR code. Customers can scan the code placed on the table to access the digital menu and view detailed product information.
                </p>
                <br />
                <p className="tarih">4 February  , 2025 ·</p>
                <br />
                <div className="dot-container">• • •</div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                <Link to="/work" className="btn page-link"> <FaChevronLeft />
                </Link>
                <p className='page-link' >Page 1 of 2</p>

                <Link to="/worktwo" className="btn page-link">
                    <FaChevronRight />
                </Link>

            </div>

        </div>
    )
}

export default Work