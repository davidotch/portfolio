import React from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import './sass/main.scss';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;