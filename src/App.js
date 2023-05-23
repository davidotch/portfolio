import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePortfolio/homePortfolio';
import Project from './pages/projectPortfolio/projectPortfolio';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectPortfolio/:id" element={<Project />} />
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App