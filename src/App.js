import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import NavBar from './components/header'

import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Work from './components/gallery'
import Contact from './components/contact'

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
