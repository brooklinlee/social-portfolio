import { Route, Routes } from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio.jsx';
import BrandTemplate from './components/Portfolio/BrandTemplate.jsx';

// assets
import PLMHeader from './assets/images/PLMHeader.svg'
import BRHeader from './assets/images/BRHeader.svg'
import PLMSkinnyShot1 from './assets/images/PLMSkinnyShot1.svg'


// components
import NavBar from './components/Nav/NavBar.jsx'

function App() {

  const brands = [
    {
      id: 1,
      backgroundImageUrl: `url(${PLMHeader})`,
      name: 'Pür Life Medical - Cottonwood Heights',
      description: 'A Holistic Medical Clinic',
      cta: 'Contact Me',
      pDescriptorOne: 'Pür Life Medical is....',
      liOne: 'thing I did for them',
      liTwo:'another thing',
      liThree: 'another thing',
      pDescriptorTwo: 'Check out content below',
      images: [PLMSkinnyShot1],
      video: [],
      carousel: [
        {
          id: 1,
          images: [PLMSkinnyShot1, PLMSkinnyShot1]
        }, 
        {
          id: 2,
          images: [PLMSkinnyShot1, PLMSkinnyShot1]
        }
      ]
    },
    {
      id: 2,
      backgroundImageUrl: `url(${BRHeader})`,
      name: 'Black Rock Mountain Resort',
      description: 'Luxury Townhomes and Condos located in Park City, Utah',
      cta: 'Contact Me',
      pDescriptorOne: 'Black Rock Resort is....',
      liOne: 'thing I did for them',
      liTwo:'another thing',
      liThree: 'another thing',
      pDescriptorTwo: 'Check out content below',
      images: [PLMSkinnyShot1],
      video: [],
      carousel: []
    }
  ]

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
