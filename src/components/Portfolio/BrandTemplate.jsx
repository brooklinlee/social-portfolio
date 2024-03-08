// import Portfolio from "../pages/Portfolio"
import './BrandTemplate.css'


const BrandTemplate = ({ brand }) => {
  return (  
    <main className='brand-template'>
      <section className='bt-header'>
        <h1>{brand.name}</h1>
        <h2>{brand.description}</h2>
        <button>{brand.cta}</button>
      </section>
    </main>
  )
}

export default BrandTemplate