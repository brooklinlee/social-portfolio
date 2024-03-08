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
import BrandTemplate from './components/BrandTemplate.jsx';

// components
import NavBar from './components/Nav/NavBar.jsx'

function App() {

  const brands = [
    {
      id: 1,
      name: 'Pür Life Medical - Cottonwood Heights, Utah',
      description: 'A Holistic Medical Clinic',
      cta: 'Contact Me'
    }
  ]

  return (
    <>
    <NavBar brands={brands}/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {brands.map(brand => (
          <Route 
            key={brand.id}
            path={`/portfolio/${brand.id}`}
            render={() => <BrandTemplate brand={brand}/>}
          />
        ))}
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </main>
    </>
  )
}

export default App
