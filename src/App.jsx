// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// pages
import Home from './pages/Home'
import About from './pages/About';

// components
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
    </>
  )
}

export default App
