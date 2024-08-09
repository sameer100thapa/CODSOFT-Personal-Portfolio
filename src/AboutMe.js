import React from 'react';


const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h1 className="about-me-title">About Me</h1>
        <p className="about-me-description">
          Hi, I'm Sameer Thapa, a passionate Front-end Developer with a keen interest in ReactJS. I'm excited to share my skills and experiences with you.
        </p>
        <div className="about-me-details">
          <div className="about-me-detail contact">
            <h2 className="about-me-detail-title">Contact</h2>
            <p className="about-me-detail-description">
              sameer100thapa@gmail.com
              <br />
              +977-9801981642
              <br />
              sameer100thapa/linkedin.com
            </p>
          </div>
          <div className="about-me-detail skills">
            <h2 className="about-me-detail-title">Skills</h2>
            <p className="about-me-detail-description">
              JavaScript, JAVA, C# 
              MongoDB, ReactJS, ASP.NET
            </p>
          </div>
          <div className="about-me-detail experience">
            <h2 className="about-me-detail-title">Experience</h2>
            <p className="about-me-detail-description">
              Network Assistant at WorldLink Communications, CSR at Kalash Service Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;