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
            distance: '50px',
            duration: 800,
            delay: 100,
            easing: 'ease-in-out',
            reset: false
        });
    }, []);

    return (
        <div>
            <div className="proje-tanitim">
                <a target="_blank" className="Tittle" href="https://krisoft.shop">Krisoft Software Company Website</a>
                <p className="paragraf">
                    A corporate website created for Krisoft Software Company to showcase services, products, and contact information with a professional design.
                </p>
                <p className="tarih">March 10, 2025 ·</p>
                <div className="dot-container">• • •</div>
            </div>

            <div className="proje-tanitim">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Tittle"
                    href="https://nabusoftupdate.vercel.app/"
                >
                    Nabusoft – Digital Solution & Software Development Agency
                </a>

                <p className="paragraf">
                    Nabusoft is a digital solution company focused on modern web development,
                    UI/UX design, and scalable software solutions.
                    The platform showcases corporate services, innovative projects,
                    and a technology-driven approach to building reliable digital products.
                </p>

                <p className="tarih">3 gün önce ·</p>
                <div className="dot-container">• • •</div>
            </div>

            <div className="proje-tanitim">
                <a target='_blank' className='Tittle' href="https://kyraxai.vercel.app/">KyraxAI Artificial Intelligence</a>
                <p className='paragraf'>This project is an AI-driven chat interface that enables users to engage in text-based conversations, similar to ChatGPT. It features a sleek and modern UI/UX design to ensure an intuitive and seamless user experience.</p>
                <p className="tarih"> December 16, 2024 · </p>
                <div className="dot-container">• • •</div>

            </div>

            <div className="proje-tanitim">
                <a target="_blank" className="Tittle" href="https://cybersecuriyedu.vercel.app/">
                    CyberSecurityEdu – Interactive Software Development Training Platform
                </a>
                <p className="paragraf">
                    CyberSecurityEdu is a task-based learning platform designed for developers who want to gain hands-on experience in software and cybersecurity.
                    Through realistic terminal simulations, a progressive mission system, and an active developer community, users enhance their skills in a fully interactive environment.
                </p>
                <p className="tarih">June 19, 2025 ·</p>
                <div className="dot-container">• • •</div>
            </div>
            <div className="proje-tanitim">
                <a target="_blank" className="Tittle" href="https://krioborsa.vercel.app/">
                    KRIO Exchange
                </a>
                <p className="paragraf">
                    KRIO Exchange is a modern platform where users can track real-time prices and charts of cryptocurrencies. It is fast, secure, and user-friendly.
                </p>
                <p className="tarih">29 June, 2025 ·</p>
                <div className="dot-container">• • •</div>
            </div>

            <div className="proje-tanitim">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Tittle"
                    href="https://www.xn--tuanagzelliksalonu-r6b.com/"
                >
                    Tuana Beauty Salon – Website with Admin Panel & Dynamic Pricing
                </a>

                <p className="paragraf">
                    This website was developed for Tuana Beauty Salon with a modern,
                    mobile-responsive design. Service prices and content can be easily
                    updated through the admin panel, allowing the business to manage
                    pricing in real time without any technical knowledge.
                </p>

                <p className="tarih">28 August, 2025 ·</p>
                <div className="dot-container">• • •</div>
            </div>



            <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', marginBottom: '0px' }}>


            </div>
        </div>
    )
}

export default Work