import BrandTemplate from "../components/BrandTemplate"

const Portfolio = () => {

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
      {brands.map(brand => (
        <BrandTemplate key={ brand.id } brand={ brand } />
      ))}
    </>
  )
}

export default Portfolio