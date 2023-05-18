import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import ErrorPage from './components/ErrorPage/errorPage';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Routes> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;