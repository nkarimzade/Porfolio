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
                <a target='_blank' className='Tittle' href="https://kyraxai.vercel.app/">KyraxAI Artificial Intelligence</a>
                <br /> <br />
                <p className='paragraf'>This project is an AI-driven chat interface that enables users to engage in text-based conversations, similar to ChatGPT. It features a sleek and modern UI/UX design to ensure an intuitive and seamless user experience.</p>
                <br />
                <p className="tarih"> December 16, 2024 · </p>
                <br />
                <div class="dot-container">• • •</div>

            </div>
            <br />

            <div className="proje-tanitim">
                <a target="_blank" className="Tittle" href="https://cybersecuriyedu.vercel.app/">
                    CyberSecurityEdu – Interactive Software Development Training Platform
                </a>
                <br /><br />
                <p className="paragraf">
                    CyberSecurityEdu is a task-based learning platform designed for developers who want to gain hands-on experience in software and cybersecurity.
                    Through realistic terminal simulations, a progressive mission system, and an active developer community, users enhance their skills in a fully interactive environment.
                </p>
                <br />
                <p className="tarih">June 19, 2025 ·</p>
                <br />
                <div className="dot-container">• • •</div>
            </div>
            <br />
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
            <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', marginBottom: '50px' }}>
                <Link to="/project" className=" page-link"> <div >
                    <FaChevronLeft />
                </div>
                </Link>
                <p className='page-link' >Page 1</p>

                <Link to="/worktwo" className=" page-link">
                    <div >
                        <FaChevronRight />
                    </div>
                </Link>

            </div>
            <br />
        </div>
    )
}

export default Work