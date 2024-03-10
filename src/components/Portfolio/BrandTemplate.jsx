import './BrandTemplate.css'

const BrandTemplate = ({ brand }) => {

  return (  
    <main className='brand-template'>
      <section className='bt-header' style={{ backgroundImage: brand.backgroundImageUrl }}>
        <h1>{brand.name}</h1>
        <h2>{brand.description}</h2>
        <button>{brand.cta}</button>
      </section>
      <section className="bt-description">
        <p>{brand.pDescriptorOne}</p>
        <div className="divided-list">
          <ul>
            <li>{brand.liOne}</li>
            <li>{brand.liTwo}</li>
            <li>{brand.liThree}</li>
          </ul>
          <ul>
            <li>{brand.liOne}</li>
            <li>{brand.liTwo}</li>
            <li>{brand.liThree}</li>
          </ul>
        </div>
        <p>{brand.pDescriptorTwo}</p>
      </section>
      <section className='bt-content'>
        <div className="video"></div>
        <div className="images">
          {brand.images && brand.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
  ))}
</div>
        <div className="carousel"></div>
      </section>
    </main>
  )
}

export default BrandTemplate