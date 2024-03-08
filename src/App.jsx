// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// pages
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio.jsx';
import PurLife from './pages/PurLife.jsx';
import BlackRock from './pages/BlackRock.jsx';
import Itovi from './pages/iTOVi.jsx';
import OilStuff from './pages/OilStuff.jsx';
import Olive from './pages/Olive.jsx';
import Ziva from './pages/Ziva.jsx';

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
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio-purlife' element={<PurLife />} />
        <Route path='/portfolio-blackrock' element={<BlackRock />} />
        <Route path='/portfolio-itovi' element={<Itovi />} />
        <Route path='/portfolio-olive' element={<Olive />} />
        <Route path='/portfolio-oilstuff' element={<OilStuff />} />
        <Route path='/portfolio-ziva' element={<Ziva />} />
      </Routes>
    </main>
    </>
  )
}

export default App
