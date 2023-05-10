import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Skills from './pages/skills/skills';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import ErrorPage from './pages/ErrorPage/errorPage';
import Header from './components/Header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;