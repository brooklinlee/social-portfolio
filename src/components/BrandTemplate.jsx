// import Portfolio from "../pages/Portfolio"

const BrandTemplate = ({ brand }) => {
  return (  
    <>
      <section>
        <h1>{brand.name}</h1>
        <h2>{brand.description}</h2>
        <button>{brand.cta}</button>
      </section>
    </>

  )
}

export default BrandTemplate