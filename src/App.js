import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './pages/homePortfolio/homePortfolio';
import PageNotFound from './pages/pageNotFound/pageNotfound';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import './sass/main.scss';

const PageLayout = () => (
  <>
    <Header />
    <Outlet /> 
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App