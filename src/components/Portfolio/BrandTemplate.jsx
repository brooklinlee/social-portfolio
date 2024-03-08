import { useParams } from 'react-router-dom'

// import Portfolio from "../pages/Portfolio"
import './BrandTemplate.css'

import PLMHeader from '../../assets/images/PLMHeader.svg'


const BrandTemplate = ({ brand }) => {

  const { id } = useParams()

  let backgroundImageUrl;
    switch(id) {
      case '1':
        backgroundImageUrl = `url(${PLMHeader})`;
        break;
      default:
        backgroundImageUrl = `url(${PLMHeader})`;
    }


  return (  
    <main className='brand-template'>
      <section className='bt-header' style={{ backgroundImage: backgroundImageUrl }}>
        <h1>{brand.name}</h1>
        <h2>{brand.description}</h2>
        <button>{brand.cta}</button>
      </section>
    </main>
  )
}

export default BrandTemplate