// css
import './HomePurpose.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPeopleLine, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

const HomePurpose = () => {
  return (  
    <>
      <main className="home-purpose">
        <div className="half-circle-two"></div>
        <h1 className="heading-secondary">Content with a Purpose</h1>
          <div className='icon-section'>
            <div>
              <div className='icon-circle'><span><FontAwesomeIcon icon={faPeopleLine}/></span></div>
              <h2>Community Building</h2>
              <p>Building a vibrant online community fosters deeper connections with your audience, fostering loyalty and driving long-term engagement.</p>
            </div>
            <div>
            <div className='icon-circle'><span><FontAwesomeIcon icon={faHeart}/></span></div>
              <h2>Captivating Audiences</h2>
              <p>Strategically crafted SEO-Driven content to captivate your audience's attention from the first click, ensuring your message reaches its intended audience effectively</p>
            </div>
            <div>
              <div className='icon-circle'><span><FontAwesomeIcon icon={faArrowUpRightDots}/></span></div>
              <h2>Elevating Standards</h2>
              <p>Quality content creation establishes your brand as an authority in your niche, driving credibility, trust, and ultimately, conversions</p>
            </div>
        </div>
      </main>
    </>
  )
}

export default HomePurpose;