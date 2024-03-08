import BrandTemplate from "../components/Portfolio/BrandTemplate"

const Portfolio = ({ brands }) => {

  return ( 
    <>
      {brands.map(brand => (
        <BrandTemplate key={ brand.id } brand={ brand } />
      ))}
    </>
  )
}

export default Portfolio