import React, { useEffect } from 'react';
import './About.css';
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import ScrollReveal from 'scrollreveal';

function About() {

    useEffect(() => {
        ScrollReveal().reveal('.text-one', {
            origin: 'bottom',
            distance: '80px',
            duration: 1000,
            delay: 100,
            easing: 'ease-in-out',
            reset: false
        });
    }, []);

    return (
        <div className='about'>
            <div className="text-one">
                <h3>Hi, I'm Nasib.</h3>
                <br /><br />
                <p>
                    I'm a Full Stack Web Developer passionate about building modern and responsive web applications.
                    I work independently on diverse digital projects, turning ideas into real-world solutions using both frontend and backend technologies.
                </p>
                <br />
                <div className="thin-line-horizontal"></div>
                <br />
                <p>
                    I’m always exploring new tools and frameworks to enhance my skills. I enjoy solving real problems with clean code,
                    thoughtful design, and efficient user experiences.
                </p>
                <br />
                <p>
                    Outside of development, I like creating minimalist tools that tackle common web development challenges and streamline workflows.
                    I believe in staying curious, building boldly, and always moving forward.
                </p>
                <br />
                <div className="butons">
                    <a href="mailto:nesibkerimzade@gmail.com" className="btn">
                        <span className="left">
                            <SiGmail /> Gmail
                        </span>
                        <div className="icon">
                            <LuSquareArrowOutUpRight />
                        </div>
                    </a>
                    <a href="https://github.com/nkarimzade" className="btn" target="_blank">
                        <span className="left">
                            <FaGithub /> Github
                        </span>
                        <div className="icon">
                            <LuSquareArrowOutUpRight />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/nasib-karimzade-7902352a5/" className="btn" target="_blank">
                        <span className="left">
                            <CiLinkedin /> LinkedIn
                        </span>
                        <div className="icon">
                            <LuSquareArrowOutUpRight />
                        </div>
                    </a>

                </div>
            </div>
        </div>

    );
}

export default About;
