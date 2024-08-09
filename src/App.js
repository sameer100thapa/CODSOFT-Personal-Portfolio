import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Introduction from './Introduction';
import ProjectShowcase from './ProjectShowcase';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<ProjectShowcase />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
