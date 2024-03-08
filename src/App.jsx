// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// pages
import Home from './pages/Home'
import About from './pages/About';
import PurLife from './pages/PurLife.jsx';
import BlackRock from './pages/BlackRock.jsx';

// components
import NavBar from './components/Nav/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio-purlife' element={<PurLife />} />
        <Route path='/portfolio-blackrock' element={<BlackRock />} />
      </Routes>
    </main>
    </>
  )
}

export default App
