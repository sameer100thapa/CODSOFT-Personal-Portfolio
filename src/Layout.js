import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Introduction from './Introduction';
import ProjectShowcase from './ProjectShowcase';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/projects" element={<ProjectShowcase />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default Layout;