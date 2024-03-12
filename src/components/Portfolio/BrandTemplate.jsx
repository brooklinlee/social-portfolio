import './BrandTemplate.css'

import Carousel from './Carousel'
import ContentCard from './ContentCard'

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
        <h3>Reels & Videos</h3>
        <div className="video">
        {brand.videos && brand.videos.map((video, index) => (
            <ContentCard
              key={index}
              content={<video src={video.src} controls preload='auto' />}
              caption={video.caption}
              purpose={video.purpose}
              equipment={video.equipment}
            />
          ))}
        </div>
        <h3>Images & Graphics</h3>
        <div className="images">
        {brand.images && brand.images.map((image, index) => (
            <ContentCard
              key={index}
              content={<img src={image.src} alt={`Image ${index + 1}`} />}
              caption={image.caption}
              purpose={image.purpose}
              equipment={image.equipment}
            />
          ))}
        </div>
        <h3>Carousel Posts</h3>
        <div className="carousel-section">
          {brand.carousel && brand.carousel.map((carousel, index) => (
            <ContentCard
              key={index}
              content={<Carousel images={carousel.images} />}
              caption={carousel.caption}
              purpose={carousel.purpose}
              equipment={carousel.equipment}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default BrandTemplate