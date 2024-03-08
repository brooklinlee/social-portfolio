import BrandTemplate from "../components/BrandTemplate"

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