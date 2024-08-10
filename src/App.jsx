import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './pages/Project';
import Skills from './pages/Skills';
import ProjectDetails from './pages/ProjectDetails';
import ContextProvider from './Context/Context';


import Login from './pages/Login';

import AdminDashboard from './pages/Admin/AdminDashboard';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollTop />
      <ContextProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/item/:id" element={<ProjectDetails />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminDashboard />} />


        </Routes>
      </ContextProvider>
      <Footer />
    </Router>
  );
};

export default App;
