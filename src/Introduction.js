
import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="left-section">
          <img src="portfolio.jpg" alt="Sameer Thapa" className="profile-picture" />
        </div>
        <div className="right-section">
          <div className="name-bio">
            <h1 className="title">
              <span className="animated-text">
                Hello! I am Sameer
              </span><br/>
              <span className="animated-designation">ReactJS Developer</span>
            </h1>
            <p className="subtitle">
              I'm a passionate ReactJS developer with a strong foundation in JavaScript, HTML/CSS, and React ecosystem.
            </p>
            <div className="button-container">
              <button className="resume-button" onClick={() => {
                const img = new Image();
                img.src = 'sameer-resume.jpg';
                const imgWindow = window.open("");
                imgWindow.document.write(img.outerHTML);
              }}>
                Resume
              </button>
              <Link to ="/contact">
              <button className="contact-button" style={{ marginLeft: '20px' }}>
      
                Contact
              </button>
              
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;