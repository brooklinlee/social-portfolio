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
        <div><span><FontAwesomeIcon icon={faPeopleLine}/></span></div>
        <div><span><FontAwesomeIcon icon={faHeart}/></span></div>
        <div><span><FontAwesomeIcon icon={faArrowUpRightDots}/></span></div>
      </main>
    </>
  )
}

export default HomePurpose;