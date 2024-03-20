import './BrandTemplate.css'

import Carousel from './Carousel'
import ContentCard from './ContentCard'

const BrandTemplate = ({ brand }) => {

  const PDF_FILE_URL = 'https://brooklinlee-socialmediamanager.netlify.app/BrooklinLee_SocialMediaManager.pdf';

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        document.body.removeChild(aTag)
      })
      .catch(error => console.error('Error downloading file:', error))
  }

  return (  
    <main className='brand-template'>
      <section className='bt-header' style={{ backgroundImage: brand.backgroundImageUrl }}>
        <h1 className='heading-primary'>{brand.name}</h1>
        <h2>{brand.description}</h2>
        <button onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}>Download my Resume</button>
      </section>
      <section className="bt-description">
        {brand.pDescriptorOne}
        <div className="divided-list">
          <ul>
            {brand.liOne}
          </ul>
          <ul>
            {brand.liTwo}
          </ul>
        </div>
        {brand.pDescriptorTwo}
      </section>
      <section className='bt-content'>
        {brand.videos && brand.videos.length > 0 && (
          <div className="content-section">
            <h3 className='heading-primary'>Reels & Videos</h3>
            <div className="video">
              {brand.videos.map((video, index) => (
                <ContentCard
                  key={index}
                  content={<video src={video.src} controls preload='auto' />}
                  caption={video.caption}
                  purpose={video.purpose}
                  equipment={video.equipment}
                />
              ))}
            </div>
          </div>
        )}
        {brand.images && brand.images.length > 0 && (
          <div className="content-section">
            <h3 className='heading-primary'>Images & Graphics</h3>
            <div className="images">
              {brand.images.map((image, index) => (
                <ContentCard
                  key={index}
                  content={<img src={image.src} alt={`Image ${index + 1}`} />}
                  caption={image.caption}
                  purpose={image.purpose}
                  equipment={image.equipment}
                />
              ))}
              {brand.carousel.map((carousel, index) => (
                <ContentCard
                  key={index}
                  content={<Carousel images={carousel.images} />}
                  caption={carousel.caption}
                  purpose={carousel.purpose}
                  equipment={carousel.equipment}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default BrandTemplate