import './BrandTemplate.css'

import Carousel from './Carousel'

import BHRTReel from '../../assets/videos/BHRTReel.mp4'

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
        <div className="video">
          {brand.videos && brand.videos.map((video, index) => (
            <video key={index} src={video} controls preload='auto'/>
          ))}
        </div>
        <div className="images">
          {brand.images && brand.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <div className="carousel">
          <h1>CAROUSEL</h1>
          {brand.carousel.map((carousel, index) => (
      <Carousel key={index} images={carousel.images} />
    ))}
        </div>
      </section>
    </main>
  )
}

export default BrandTemplate