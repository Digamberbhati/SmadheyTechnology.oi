
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/contactform/Contact'

function App() {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
