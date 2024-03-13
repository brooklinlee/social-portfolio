import { Route, Routes } from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio.jsx';
import BrandTemplate from './components/Portfolio/BrandTemplate.jsx';



// components
import NavBar from './components/Nav/NavBar.jsx'
import { brands } from './components/Portfolio/Brands.jsx';

function App() {

  return (
<>
  <NavBar brands={brands}/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio brands={brands} />} />
        {brands.map(brand => (
          <Route 
            key={brand.id}
            path={`/portfolio/${brand.id}`}
            element={<BrandTemplate brand={brand} />}
          />
        ))}
      </Routes>
    </main>
  </>
  )
}

export default App
