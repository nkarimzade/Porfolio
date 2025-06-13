import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { IoCloudDownloadSharp } from "react-icons/io5";


function Blog() {
  useEffect(() => {
    ScrollReveal().reveal('.cv-button', {
      origin: 'bottom',
      distance: '40px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });

  }, []);

  return (
    <div>

       <div className="experince">
      <div className="logo">
        <img src="/public/sade-pp.jpg" alt="Sade Media Logo" />
      </div>
      <div className="about">
        <strong>Full-Stack Web Developer</strong>
        <h5>sADe Media · Part-time</h5>
        <br />
        <p>
          May 2025 - Present · 2 months <br />
          Çankırı, Türkiye · Hybrid <br /><br />
          Full Stack Web Developer | Sade Media Reklam
        </p>
        <br />
        <span>
          • I work as a full stack developer on various digital projects for the company. <br />
          • I build dynamic and user-friendly web applications using technologies like React.js, Next.js, Node.js, and PHP. <br />
          • I develop RESTful APIs and integrate them with existing systems. <br />
          • I implement modern, UI/UX-focused designs, ensuring mobile responsiveness and performance optimization. <br />
          • I follow Agile methodologies using tools like Git and Trello to manage and track project progress. <br />
          • I maintain strong team communication and ensure efficient remote workflows.
        </span>
      </div>
    </div>
      <br />
      <div className="thin-line-horizontal"></div>

      <br />
      <div className="experince">
        <div className="logo">
          <img src="/grifonai-pp.jpg" alt="GrifonAI Logo" />
        </div>
        <div className="about">
          <strong>Web Developer Intern</strong>
          <h5>GrifonAI Yazılım Teknoloji Danışmanlık LTD. ŞTİ. · Intern</h5>
          <br />
          <p>
            Jun 2024 - Aug 2024 · 3 months <br />
            Çankırı, Türkiye · Remote <br /><br />
            GrifonAI – Corporate Website Development
          </p>
          <br />
          <span>
            • As part of my internship at GrifonAI, I designed and developed the company’s corporate website to serve as its digital showcase. <br />
            • The project focused on a responsive design approach and a user experience (UX)-oriented structure. <br /><br />
            <strong>During the frontend development process:</strong> <br />
            • I used HTML5, CSS3 (Flexbox, Grid), and Vanilla JavaScript. <br />
            • I built a clean, accessible, and performance-focused UI/UX structure. <br />
            • I ensured full cross-browser compatibility for a consistent user experience. <br /><br />
            The goal of the project was to effectively present GrifonAI’s AI solutions, strengthen the company’s corporate credibility, and establish a digital channel for potential collaborations. <br /><br />
            🔗 <a href="https://grifonai.com" target="_blank" rel="noopener noreferrer">grifonai.com</a>
          </span>
        </div>
      </div>
<br />
    </div>


  );
}

export default Blog;
