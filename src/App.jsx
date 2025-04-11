import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import Project from './Components/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Profile />}>
          <Route index element={<Intro/>} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
