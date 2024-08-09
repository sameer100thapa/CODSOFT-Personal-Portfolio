import React from 'react';

const ProjectShowcase = () => {
  return (
    <section className="project-showcase">
      <h1>Projects</h1>
      <ul className="project-list">
        <li className="project-item">
          <div className="project-card" style={{ backgroundColor: '#f7d2c4' }}>
            <h2>Task Tracker Application</h2>
            <p>To-Do List Application using ReactJS
            </p>
            <a href="https://github.com/sameer100thapa/-CODSOFT-TO-DO-LIST.git">Github Link</a>
          </div>
        </li>
        <li className="project-item">
          <div className="project-card" style={{ backgroundColor: '#c9f7c4' }}>
            <h2>Product Catalog</h2>
            <p>Sneakers Catalog using ReactJS</p>
            <a href="https://github.com/sameer100thapa/CODSOFT-PRODUCT-CATALOG.git">Github Link</a>
          </div>
        </li>
        <li className="project-item">
          <div className="project-card" style={{ backgroundColor: '#c4f7fc' }}>
            <h2>Blog Platform</h2>
            <p>
              A blog platform built with ReactJS and Firebase.
            </p>
            <a href="https://github.com/sameer100thapa/CodSoft-blog-platform.git">Github Link</a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProjectShowcase;